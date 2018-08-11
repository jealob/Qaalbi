import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from './components/Nav';
import Callback from './Callback/Callback';
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Dashboard from "./pages/Dashboard";
import Auth from './Auth/Auth';
import history from './Auth/history';



const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const appRoutes = () => {

  return (
  <Router history={history}>
    <div>
      =
      <Switch>
       <Route path="/" render={(props) => <Nav auth={auth} {...props} />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addevent" component={AddEvent} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
     <Footer/>
    </div>
  </Router>
);
}



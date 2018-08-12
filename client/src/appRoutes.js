import React from "react";
import { Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Dashboard from "./pages/Dashboard";
import Auth from './Auth/Auth';
import history from './history';
import Callback from './pages/Callback/Callback';



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
        <Route path="/" render={(props) => <Nav auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addevent" component={AddEvent} />
        <Route exact path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
    </div>
  </Router>
);
}



import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import AddEvent from "./pages/AddEvent";
import EventSearch from "./pages/EventSearch";
import Dashboard from "./pages/Dashboard";
import Auth from './Auth/Auth';
import history from './history';
import Callback from './pages/Callback/Callback';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const App = () => {
  return (
    <div>
      <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
            {/* <Route exact path="/addevent" render={(props) => <AddEvent auth={auth} {...props} />} /> */}
            <Route exact path="/eventsearch" render={(props) => <EventSearch auth={auth} {...props} />} />
            <Route exact path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
          </Switch>
      </Router>
    </div>
  );
}



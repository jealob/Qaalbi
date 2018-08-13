import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Dashboard from "./pages/Dashboard";
import Itinerary from "./pages/Itinerary";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addevent" component={AddEvent} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/itinerary" component={Itinerary}/>
        
      </Switch>
    </div>
  </Router>
);

export default App;

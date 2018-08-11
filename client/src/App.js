import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Dashboard from "./pages/Dashboard";
import { Chart } from "./components/Chart";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addevent" component={AddEvent} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>

); 

export default App;


import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Auth from './Auth/Auth';
import history from './history';
import Callback from './pages/Callback/Callback';
import Chart from "./components/Chart"
import ApptForm from "./components/ApptForm";



const auth = new Auth();

const handleAuthentication = ({
  location
}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

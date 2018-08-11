import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { appRoutes } from './appRoutes';

const app = appRoutes();

ReactDOM.render(
  app,
  document.getElementById('root')
);
registerServiceWorker();

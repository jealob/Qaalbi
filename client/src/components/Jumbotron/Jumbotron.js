import React from "react";

const Jumbotron = (props) => (
  <div className="jumbotron jumbotron-fluid border rounded ">
  <div className="container">
    <h1 className="display-4 text-center">Qaalbi Events</h1>
    <p className="lead text-center">{props.children}</p>
  </div>
</div>
);

export default Jumbotron;

import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import Jumbotron from "../../components/Jumbotron";
// import Map from "../../components/Map";

const Itinerary = () => {
    return (
        <div>
           {/* <Jumbotron>Add Event form Page</Jumbotron> */}
           <div className="col-sm-3">
        <p>
         <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="true" aria-controls="collapseExample1">
         Event Details </a>
        </p>
        <div classNames="collapse" id="collapseExample1">
                    <div className="card card-body">
                        <div className="col-sm-4">
                            <p className="badge badge-success" role="alert">Wedding
                                <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <p className="badge badge-success" role="alert">Event Date: 08/19/2019
                                <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-sm-4">
        <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                    Prerequisties </a>
            </p>
                        <p className="badge badge-success" role="alert">Outdoor
                            <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                        </p>
                 
                    <div className="col-sm-4">
                        <p className="badge badge-success" role="alert">Reception
                            <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p className="badge badge-success" role="alert">Alcohol
                            <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p className="badge badge-success" role="alert">Season: Summer
                            <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p className="badge badge-success" role="alert">Catering
                            <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                        </p>

                    </div>
                </div>
                <div className="col-sm-3">
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Payment</a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <p className="badge badge-success" role="alert">Method: Down + Finance
                        <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                    </p>
                    <p className="badge badge-success" role="alert">Down-payment Due: 09/19/2018
                        <i className="fa fa-check-square fa-lg" aria-hidden="true"></i>
                    </p>

                </div>
            </div>
        </div>
    </div>
   
 )}

export default Itinerary;
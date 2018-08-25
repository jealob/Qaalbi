import React from "react";
import "./AppForm.css";
const AppForm = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="well-block">
                    <div className="well-title">
                        <h2>Questions? Book an Appointment</h2>
                    </div>
                    <form>
                        {/* Form start */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="email">Email</label>
                                    <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md" />
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="date">Preferred Date</label>
                                    <input id="date" name="date" type="text" placeholder="Preferred Date" className="form-control input-md" />
                                </div>
                            </div>
                            {/* Select Basic */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="time">Preferred Time</label>
                                    <select id="time" name="time" className="form-control">
                                        <option value="8:00 to 9:00">8:00 to 9:00</option>
                                        <option value="9:00 to 10:00">9:00 to 10:00</option>
                                        <option value="10:00 to 1:00">10:00 to 1:00</option>
                                    </select>
                                </div>
                            </div>
                            {/* Select Basic */}
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="appointmentfor">Appointment For</label>
                                    <select id="appointmentfor" name="appointmentfor" className="form-control">
                                        <option value="Service#1">Organizational Event</option>
                                        <option value="Service#2">Personal Event</option>
                                        <option value="Service#3">Wedding</option>
                                        <option value="Service#4">Other</option>
                                    </select>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button id="singlebutton" name="singlebutton" className="btn btn-default">Make An Appointment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* form end */}
                </div>
            </div>  </div>
    </div>
);
export default AppForm;
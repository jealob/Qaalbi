import React from "react";
import "./ApptForm.css";

const AppointmentForm = (props) => {
  return (

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
                    <input id="appointment-date"
                      name="date"
                      type="date"
                      className="form-control input-md"
                      onChange={props.onChange} />
                  </div>
                </div>
                {/* Text input*/}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <input
                      id="message"
                      name="message"
                      type="textarea"
                      placeholder="details for appointment"
                      className="form-control input-md"
                      onChange={props.onChange} />
                  </div>
                </div>
                {/* Button */}
                <div className="col-md-12">
                  <div className="form-group">
                    <button id="singlebutton" name="singlebutton" className="btn btn-default" onClick={props.handleBookAppointment}>Make An Appointment</button>
                  </div>
                </div>
              </div>
            </form>
            {/* form end */}
          </div>
        </div>  </div>
    </div>
  );
};

export default AppointmentForm;
import React from "react";
// import "./ApptForm.css";

const AppointmentForm = (props) => {
  return (
    <form className="my-3">
      {/* Form start */}
      <p>Questions? Book an Appointment</p>
      <div className="row">
      <div className="col-xs-12 col-4">
          <div className="form-group px-2">
            <label className="control-label" htmlFor="name">Name</label>
            <input id="appt-name"
              name="appointmentName"
              type="text"
              className="form-control"
              onChange={props.onChange}/>
          </div>
        </div>
        <div className="col-xs-12 col-4">
          <div className="form-group px-2">
            <label className="control-label" htmlFor="name">Date</label>
            <input id="appt-date"
              name="appointmentDate"
              type="date"
              className="form-control"
              onChange={props.onChange}/>
          </div>
        </div>
        <div className="col-xs-12 col-4">
          <div className="form-group px-2">
            <label className="control-label" htmlFor="name">Subject</label>
            <input id="appt-subject"
              name="appointmentSubject"
              type="text"
              className="form-control"
              onChange={props.onChange}/>
          </div>
        </div>
        <div className="col-xs-12 col-3">
          <div className="form-group px-2">
            <label className="control-label" htmlFor="name">Time</label>
            <select id="appt-time"
              name="appointmentTime"
              type="time"
              className="form-control"
              onChange={props.onChange}>
              <option value="select">Select</option>
              <option value="9:00AM">9:00AM</option>
              <option value="9:30AM">9:30AM</option>
              <option value="10:00AM">10:00AM</option>
              <option value="10:30AM">10:30AM</option>
              <option value="11:00AM">11:00AM</option>
              <option value="11:30AM">11:30AM</option>
              <option value="12:00PM">12:00PM</option>
              <option value="12:30PM">12:30PM</option>
              <option value="1:00PM">1:00PM</option>
              <option value="1:30PM">1:30PM</option>
              <option value="2:00PM">2:00PM</option>
              <option value="2:30PM">2:30PM</option>
              <option value="3:00PM">3:00PM</option>
              <option value="3:30PM">3:30PM</option>
              <option value="4:00PM">4:00PM</option>
              <option value="4:30PM">4:30PM</option>
              <option value="5:00PM">5:00PM</option>
              <option value="5:30PM">5:30PM</option>
              <option value="6:00PM">6:00PM</option>
              <option value="6:30PM">6:30PM</option>         
            </select>
          </div>
        </div>
        <div className="col-xs-12 col-4">
          <div className="form-group px-2">
            <label className="control-label" htmlFor="name">Appointment Type</label>
            <select id="appt-type"
              name="appointmentType"
              className="form-control"
              onChange={props.onChange}>
              <option value="select">Select</option>
              <option value="phone">Phone</option>
              <option value="hangout">Hangout</option>
              <option value="facetime">Face Time</option>
              <option value="in-person">In Person</option>
            </select>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group px-2">
        <label className="control-label" htmlFor="email">Message</label>
        <textarea
          id="message"
          name="appointmentMessage"
          type="textarea"
          placeholder="details for appointment"
          className="form-control"
          onChange={props.onChange}/>
      </div>
      {/* Button */}
      <div className="form-group">
        <button id="singlebutton" name="singlebutton" className="btn btn-default  m-2" onClick={props.handleBookAppointment}>Book</button>
      </div>
    </form >
    //  form end  
  );
};

export default AppointmentForm;
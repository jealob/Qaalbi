import React from "react";
import "./AddEvent.css";

const AddEvent = (props) => {
  return (
    <nothing>
      <form className="border rounded px-2">
      <h2> Contact Us Today! </h2>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="name">Name
                                <span className="required-field"> *</span>
            </label>
            <input type="text" className="required form-control" id="name" placeholder="Mary Smith"></input>
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="email">Email
                                <span className="required-field"> *</span>
            </label>
            <input type="email" className="form-control" id="email" placeholder="someone@email.com"></input>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="phone">Phone
                                <span className="required-field"> *</span>
            </label>
            <input type="" className="form-control" id="phone" placeholder="123-456-7890"></input>
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="eventDate">Event Date
                                <span className="required-field"> *</span>
            </label>
            <input type="date" className="form-control" id="eventDate"></input>
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="preferredContact">Method of Contact</label>
            <select id="preferredContact" className="form-control">
              <option selected>Please Select</option>
              <option>Phone</option>
              <option>Email</option>
              <option>Text Message</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <label for="eventLoc">Event Location</label>
            <input type="text" className="form-control" id="eventLoc" placeholder="1234 Main St"></input>
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="find">Find Address</label>
            <br></br>
            <button type="button" className="btn btn-secondary" id="search">Search</button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="eventType">Event Type</label>
            <select id="eventType" className="form-control">
              <option selected>Please Select</option>
              <option>Wedding</option>
              <option>Bridal Shower</option>
              <option>Baby Shower</option>
              <option>Birthday</option>
              <option>Work Event</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label for="serviceType">Service Type</label>
            <select id="serviceType" className="form-control">
              <option selected>Please Select</option>
              <option>Basic</option>
              <option>Plus</option>
              <option>Premium</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <label for="message">Message</label>
            <textarea type="text" className="form-control" id="message" name="message" placeholder="Addtional message you want us to know"
              rows="4" cols="60"></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#warningModal" id="submit">Submit</button>
          </div>
        </div>
      </form>
    </nothing>
  );
};
export default AddEvent;
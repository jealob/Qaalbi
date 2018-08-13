import React from "react";
import "./AddEvent.css";

const AddEvent = (props) => {
  return (
    <form className="border rounded px-2 mb-4">
      <h2> Contact Us Today! </h2>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="name">Name
                                <span className="required-field"> *</span>
          </label>
          <input type="text" className="required form-control" id="name" placeholder="Mary Smith" />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="email">Email
                                <span className="required-field"> *</span>
          </label>
          <input type="email" className="form-control" id="email" placeholder="someone@email.com" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="phone">Phone
                                <span className="required-field"> *</span>
          </label>
          <input type="" className="form-control" id="phone" placeholder="123-456-7890" />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="eventDate">Event Date
                                <span className="required-field"> *</span>
          </label>
          <input type="date" className="form-control" id="eventDate" />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="preferredContact">Method of Contact</label>
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
          <label htmlFor="eventLoc">Event Location</label>
          <input type="text" className="form-control" id="eventLoc" placeholder="1234 Main St" />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="find">Find Address</label>
          <br></br>
          <button type="button" className="btn btn-secondary" id="search">Search</button>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="eventType">Event Type</label>
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
          <label htmlFor="serviceType">Service Type</label>
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
          <label htmlFor="message">Message</label>
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
  );
};
export default AddEvent;
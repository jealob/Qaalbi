import React from "react";
import "./ExpenseCalculator.css";

const ExpenseCalculator = (props) => {
    return (
        <form class="form-horizontal"form action="" id="eventform" onsubmit="return false;">
  
    <fieldset> 
    
    {/* Form Name */}
    <legend>Event Calculator</legend>
    
    {/* <!-- Select Basic --> */}
    
    <div class="form-group">
      <label class="col-md-4 control-label" for="Venue">Event Venue</label>
      <div class="col-md-5">
        <select id="Venue" name="Venue" class="form-control" onchange="calculateTotal()">
          <option value="banquethall">Select Venue</option>
          <option value="eventfacility">Banquet Hall</option>
          <option value="church">Event Facility</option>
          <option value="hotel_resort">Church</option>
          <option value="countryclub">Hotel/Resort</option>
          <option value="garden_park">Country Club</option>
          <option value="beach">Garden/ Park</option>
          <option value="privateresidence">Beach</option>
          <option value="farm">Private Residence</option>
          <option value="home">Farm</option>
          <option value="lakefront">Home</option>
          <option value="historicalbuilding">Lake-Front</option>
          <option value="historicalbuilding">Historical Building</option>
        </select>
      </div>
    </div>
    
    {/* <!-- Select Basic --> */}
    <div class="form-group">
      <label class="col-md-4 control-label" for="guest_no">Number of Guests</label>
      <div class="col-md-5">
        <select id="guest_no" name="guest_no" class="form-control"onchange="calculateTotal()">
          <option value="100-200">Please Select</option>
          <option value="200-300">50-100</option>
          <option value="300-400">100-200</option>
          <option value="400-500">200-300</option>
          <option value="500-1000">300-400</option>
          <option value="">400-500</option>
          <option value="">500-1000 Call for Quote</option>
        </select>
      </div>
    </div>
    
    {/* <!-- Select Basic --> */}
    <div class="form-group">
      <label class="col-md-4 control-label" for="catering">Catering</label>
      <div class="col-md-5">
        <select id="catering" name="catering" class="form-control"onchange="calculateTotal()">
          <option value="None">Please Select</option>
          <option value="Sit-DownDinner">Sit-Down Dinner</option>
          <option value="BuffetStyle">Buffet Style</option>
          <option value="CocktailStyle">Cocktail Style</option>
          <option value="Reception">Reception</option>
          <option value="FoodTruck">Food Truck</option>
          <option value="FoodStations">Food Stations</option>
        </select>
      </div>
    </div>
    
    {/* <!-- Multiple Checkboxes --> */}
    <div class="form-group">
      <label class="col-md-4 control-label" for="professional_services">Professional Services</label>
      <div class="col-md-4">
      <div class="checkbox">
        <label for="professional_services-0">
          <input type="checkbox" name="professional_services"onclick="calculateTotal()"  id="professional_services-0" value="photographer"/>
          Photographer
        </label>
        </div>
      <div class="checkbox"/>
        <label for="professional_services-1">
          <input type="checkbox" name="professional_services"onclick="calculateTotal()" id="professional_services-1" value="dj"/>
          DJ
        </label>
        </div>
      <div class="checkbox">
        <label for="professional_services-2">
          <input type="checkbox" name="professional_services"onclick="calculateTotal()" id="professional_services-2" value="hairdresser"/>
          Hair Dresser
        </label>
        </div>
      <div class="checkbox">
        <label for="professional_services-3">
          <input type="checkbox" name="professional_services"onclick="calculateTotal()" id="professional_services-3" value="makeupartist"/>
          Makeup Artist
        </label>
        </div>
      </div>
    
    
    {/* <!-- Multiple Checkboxes --> */}
    <div class="form-group">
      <label class="col-md-4 control-label" for="add_services">Additional Services</label>
      <div class="col-md-4">
      <div class="checkbox">
        <label for="add_services-0">
          <input type="checkbox" name="add_services"onclick="calculateTotal()" id="add_services-0" value="openbar"/>
          Open Bar
        </label>
        </div>
      <div class="checkbox">
        <label for="add_services-1">
          <input type="checkbox" name="add_services"onclick="calculateTotal()" id="add_services-1" value="eventplanner"/>
          Party/Event Planner
        </label>
        </div>
      <div class="checkbox">
        <label for="add_services-2">
          <input type="checkbox" name="add_services" onclick="calculateTotal()"id="add_services-2" value="invitations"/>
          Invitations
        </label>
        </div>
      <div class="checkbox">
        <label for="add_services-3">
          <input type="checkbox" name="add_services"onclick="calculateTotal()" id="add_services-3" value="decorations"/>
          Decorations
        </label>
        </div>
      </div>
    </div>

    <div id="totalPrice">

    </div>
    {/* <!-- Button --> */}
    <div class="form-group">
      <label class="col-md-4 control-label" for="submit_button"></label>
      <div class="col-md-4">
        <button id="submit_button" name="submit_button" class="btn btn-warning">Submit</button>
      </div>
    </div>
    
    </fieldset>
    </form>
    
    );
  };
  export default ExpenseCalculator;
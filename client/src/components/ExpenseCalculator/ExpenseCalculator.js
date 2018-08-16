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
    <label class="col-md-4 control-label" id="header" for="rentals">Rentals</label>
        <div class="col-md-5">
          <label class="checkbox-inline" for="rentals-0">
            <input type="checkbox" name="rentals" id="rentals-0" value="Event Accessories"/> Event Accessories
          </label>
          <label class="checkbox-inline" for="rentals-1">
            <input type="checkbox" name="rentals" id="rentals-1" value="Lighting"/> Lighting
          </label>
          <label class="checkbox-inline" for="rentals-2">
            <input type="checkbox" name="rentals" id="rentals-2" value="Tent"/> Tent
          </label>
          <label class="checkbox-inline" for="rentals-3">
            <input type="checkbox" name="rentals" id="rentals-3" value="Tables"/> Tables
          </label>
          <label class="checkbox-inline" for="rentals-4">
            <input type="checkbox" name="rentals" id="rentals-4" value="Chair"/> Chair
          </label>
          <label class="checkbox-inline" for="rentals-5">
            <input type="checkbox" name="rentals" id="rentals-5" value="Photo Booth"/> Photo Booth
          </label>
          <label class="checkbox-inline" for="rentals-6">
            <input type="checkbox" name="rentals" id="rentals-6" value="Transportation"/> Transportation
          </label>
        </div>


{/* <!-- Multiple Checkboxes (inline) --> */}
<div class="form-group">
  <label class="col-md-4 control-label" id="header" for="decorations">Decorations</label>
  <div class="col-md-5">
    <label class="checkbox-inline" for="decorations-0">
      <input type="checkbox" name="decorations" id="decorations-0" onclick="calculateTotal()" value="Bouquets"/> Bouquets
    </label>
    <label class="checkbox-inline" for="decorations-1">
      <input type="checkbox" name="decorations" id="decorations-1" onclick="calculateTotal()" value="Boutonnieres_Corsages"/> Boutonnieres/ Corsages
    </label>
    <label class="checkbox-inline" for="decorations-2">
      <input type="checkbox" name="decorations" id="decorations-2"onclick="calculateTotal()" value="Event Decorations"/> Flowers
    </label>
    <label class="checkbox-inline" for="decorations-3">
      <input type="checkbox" name="decorations" id="decorations-3" onclick="calculateTotal()" value="flowers"/> Event Flowers &amp; Arrangements
    </label>
    <label class="checkbox-inline" for="decorations-4">
      <input type="checkbox" name="decorations" id="decorations-4" onclick="calculateTotal()" value="arrangements"/> Event Table Centerpieces
    </label>
    <label class="checkbox-inline" for="decorations-5">
      <input type="checkbox" name="decorations" id="decorations-5" onclick="calculateTotal()" value="centerpieces"/> Other Decor
    </label>
  </div>
</div>

{/* <!-- Multiple Checkboxes --> */}
<div class="form-group">
  <label class="col-md-4 control-label" id="header" for="gift_favors">Gift/Favors</label>
  <div class="col-md-4">
    <div class="checkbox">
      <label for="gift_favors-0">
        <input type="checkbox" name="gift_favors" id="gift_favors-0" onclick="calculateTotal()" value="Gifts for Attendees"/> Gifts for Attendees
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-1">
        <input type="checkbox" name="gift_favors" id="gift_favors-1" onclick="calculateTotal()" value="Favors"/> Favors
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-2">
        <input type="checkbox" name="gift_favors" id="gift_favors-2" onclick="calculateTotal()" value="Programs"/> Programs
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-3">
        <input type="checkbox" name="gift_favors" id="gift_favors-3" onclick="calculateTotal()" value="Guest Book"/> Guest Book
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-4">
        <input type="checkbox" name="gift_favors" id="gift_favors-4" onclick="calculateTotal()" value="Invitations/Reply Cards"/> Invitations/Reply Cards
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-5">
        <input type="checkbox" name="gift_favors" id="gift_favors-5" onclick="calculateTotal()" value="Menus"/> Menus
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-6">
        <input type="checkbox" name="gift_favors" id="gift_favors-6" onclick="calculateTotal()" value="Place Cards"/> Place Cards
      </label>
    </div>
    <div class="checkbox">
      <label for="gift_favors-7">
        <input type="checkbox" name="gift_favors" id="gift_favors-7" onclick="calculateTotal()" value="Thank You Cards"/> Thank You Cards
      </label>
    </div>
  </div>
</div>

{/* <!-- Multiple Checkboxes (inline) --> */}
<div class="form-group">
  <label class="col-md-4 control-label" id="header" for="entertainment">Entertainment</label>
  <div class="col-md-4">
    <label class="checkbox-inline" for="entertainment-0">
      <input type="checkbox" name="entertainment" id="entertainment-0" onclick="calculateTotal()" value="DJ"/> DJ
    </label>
    <label class="checkbox-inline" for="entertainment-1">
      <input type="checkbox" name="entertainment" id="entertainment-1" onclick="calculateTotal()" value="MC"/> MC
    </label>
    <label class="checkbox-inline" for="entertainment-2">
      <input type="checkbox" name="entertainment" id="entertainment-2" onclick="calculateTotal()" value="Videographer"/> Videographer
    </label>
    <label class="checkbox-inline" for="entertainment-3">
      <input type="checkbox" name="entertainment" id="entertainment-3" onclick="calculateTotal()" value="Photographer"/> Photographer
    </label>
    <label class="checkbox-inline" for="entertainment-4">
      <input type="checkbox" name="entertainment" id="entertainment-4" onclick="calculateTotal()" value="Live Band"/> Live Band
    </label>
    <label class="checkbox-inline" for="entertainment-5">
      <input type="checkbox" name="entertainment" id="entertainment-5" onclick="calculateTotal()" value="Musicians"/> Musicians
    </label>
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
    </div>
    </fieldset>
    </form>

    
    );
  };
  export default ExpenseCalculator;
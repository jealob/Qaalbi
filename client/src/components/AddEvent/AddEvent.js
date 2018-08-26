import React from "react";
import "./AddEvent.css";

const AddEvent = (props) => {

  return (
    <form id="form" className="border rounded px-2 mb-4">
      <h2> Add Event</h2>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="name">Name
            <span className="required-field"> *</span>
          </label>
          <input type="text" className="required form-control" id="name" placeholder="Mary Smith"
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="email">Email
             <span className="required-field"> *</span>
          </label>
          <input type="email" className="form-control" id="email" placeholder="someone@email.com"
            value={props.email}
            name="email"
            onChange={props.handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="phone">Phone
              <span className="required-field"> *</span>
          </label>
          <input type="number" className="form-control" id="phone" placeholder="123-456-7890"
            value={props.phone}
            name="phone"
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="eventDate">Event Date
              <span className="required-field"> *</span>
          </label>
          <input type="date" className="form-control" id="eventDate"
            value={props.eventDate}
            name="eventDate"
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <label htmlFor="preferredContact">Method of Contact</label>
          <select id="preferredContact" className="form-control"
            value={props.contactOptions}
            name='contactOptions'
            onChange={props.handleInputChange}
            required
          >
            <option selected>Please Select</option>
            <option>Phone</option>
            <option>Email</option>
            <option>Text Message</option>
          </select>
        </div>
      </div>

      <div className="form-row border rounded mb-2">
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
          <div className="checker">
            <label htmlFor="beautyServices">Beauty Services</label>
          </div>
          <div className="checker">
            <input type="checkbox" id="hairService"
              value="hairService"
              name='hairService'
              checked={props.hairService}
              onChange={props.handleInputChange}
            />
            <label for="hairService">Hair Service</label>
          </div>
          <div className="checker">
            <input type="checkbox" id="makeupService" name="feature"
              value="makeupService"
              name='makeupService'
              checked={props.makeupService}
              onChange={props.handleInputChange}
            />
            <label for="makeupService">Makeup Service</label>
          </div>
          <div className="checker">
            <input type="checkbox" id="manicurePedicure" name="feature"
              value="manicurePedicure"
              name='manicurePedicure'
              checked={props.manicurePedicure}
              onChange={props.handleInputChange}
            />
            <label for="manicurePedicure">Manicure &amp; Pedicure</label>
          </div>
        </div>
        <div className="form-group col">
          <button type="submit" className="btn btn-secondary" onClick={props.handleFormSubmit} data-toggle="modal" data-target="#warningModal" id="submit">Save</button>
        </div>
      </div>
    </form>





    //* End Message */}
    // End Form
    // <div className="form-row">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
    //       <label htmlFor="eventType">Event Type</label>
    //       <select id="eventType" className="form-control">
    //         <option selected>Please Select</option>
    //         <option>Wedding</option>
    //         <option>Bridal Shower</option>
    //         <option>Baby Shower</option>
    //         <option>Birthday</option>
    //         <option>Work Event</option>
    //         <option>Others</option>
    //       </select>
    //     </div>
    //     <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
    //       <label htmlFor="eventType">Location Type</label>
    //       <select id="eventType" className="form-control">
    //         <option selected>Please Select</option>
    //         <option>Beach</option>
    //         <option>Casual</option>
    //         <option>Destination</option>
    //         <option>DIY(Do It Yourself)</option>
    //         <option>Elegant</option>
    //         <option>Formal</option>
    //         <option>Fun</option>
    //         <option>Garden</option>
    //         <option>Romantic</option>
    //         <option>Rustic</option>
    //         <option>Simple</option>
    //         <option>Theme</option>
    //         <option>Traditional</option>
    //         <option>Unique</option>
    //         <option>Vintage</option>
    //         <option>Others</option>
    //       </select>
    //     </div>
    //     <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
    //       <label htmlFor="serviceType">Service Type</label>
    //       <select id="serviceType" className="form-control">
    //         <option selected>Please Select</option>
    //         <option>Basic</option>
    //         <option>Plus</option>
    //         <option>Premium</option>
    //       </select>
    //     </div>
    //   </div>
    //   {/* Beauty and Entertainment */}
    //   <div className="form-row border rounded mb-2">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       <div className="checker">
    //         <label htmlFor="beautyServices">Beauty Services</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="hairService" name="feature"
    //           value="hairService" />
    //         <label for="hairService">Hair Service</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="makeupService" name="feature"
    //           value="makeupService" />
    //         <label for="makeupService">Makeup Service</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="manicurePedicure" name="feature"
    //           value="manicurePedicure" />
    //         <label for="manicurePedicure">Manicure &amp; Pedicure</label>
    //       </div>
    //     </div>{/*End  Beauty */}

    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       <div>
    //         <div className="checker">
    //           <label htmlFor="entertainment">Entertainment</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="dj" name="feature"
    //             value="dj" />
    //           <label for="dj">DJ</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="mc" name="feature"
    //             value="mc" />
    //           <label for="mc">MC</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="lighting" name="feature"
    //             value="lighting" />
    //           <label for="lighting">Entertainment Lighting</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="liveBand" name="feature"
    //             value="liveBand" />
    //           <label for="liveBand">Live Band</label>
    //         </div>
    //       </div>
    //     </div>{/* End Entertainment */}
    //   </div>{/* End Beauty and Entertainment */}

    //   {/* Gifts */}
    //   <div className="form-row border rounded mb-2">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 checkboxes">
    //       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //         <div className="checker">
    //           <label htmlFor="entertainment">Gifts &amp; Favors</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="attendanceGift" name="feature"
    //             value="attendanceGift" />
    //           <label for="attendanceGift">Gift for Attendance (Per Person)</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="favors" name="feature"
    //             value="favors" />
    //           <label for="favors">Favors (Wedding)</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="invitations" name="feature"
    //             value="invitations" />
    //           <label for="invitations">Invitations</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="programs" name="feature"
    //             value="programs" />
    //           <label for="programs">Ceremony Programs</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="guestBook" name="feature"
    //             value="guestBook" />
    //           <label for="guestBook">Guest Book</label>
    //         </div>
    //       </div>{/* End Gifts */}

    //       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //         <div className="checker">
    //           <input type="checkbox" id="invitationCards" name="feature"
    //             value="invitationCards" />
    //           <label for="invitationCards">Invitation &amp; Reply Cards</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="receptionMenu" name="feature"
    //             value="receptionMenu" />
    //           <label for="receptionMenu">Reception Menus</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="dateCards" name="feature"
    //             value="dateCards" />
    //           <label for="dateCards">Save the Date Cards </label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="tableName" name="feature"
    //             value="tableName" />
    //           <label for="tableName">Table Name &amp; Escort/Place Cards </label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="thankyouCards" name="feature"
    //             value="thankyouCards" />
    //           <label for="thankyouCards">Thank You Cards </label>
    //         </div>
    //       </div>
    //     </div>
    //   </div> {/* End Gifts */}

    //   {/* Flower and Photography */}
    //   <div className="form-row border rounded mb-2">
    //     {/* Flower */}
    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       <div className="checker">
    //         <label htmlFor="flowerDecor">Flowers &amp; Decoration</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="bouquets" name="feature"
    //           value="bouquets" />
    //         <label for="bouquets">Bouquets</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="boutonnieres" name="feature"
    //           value="boutonnieres" />
    //         <label for="boutonnieres">Boutonnieres/Corsages</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="eventDecoration" name="feature"
    //           value="eventDecoration" />
    //         <label for="eventDecoration">Event Decoration</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="flowers" name="feature"
    //           value="flowers" />
    //         <label for="flowers">Flowers</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="eventFlowers" name="feature"
    //           value="eventFlowers" />
    //         <label for="eventFlowers">Event Flowers &amp; Arrangements</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tableCenterpieces" name="feature"
    //           value="tableCenterpieces" />
    //         <label for="tableCenterpieces">Event Table Centerpieces</label>
    //       </div>
    //     </div>  {/* End Flower */}

    //     {/* PhotoGraphy */}
    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       <div className="checker">
    //         <label htmlFor="media">Photography &amp; Video</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="dvd" name="feature"
    //           value="dvd" />
    //         <label for="dvd">Digital/Photo DVD</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="engagments" name="feature"
    //           value="engagments" />
    //         <label for="engagments">Engagement Sessions (Wedding)</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="photoBooth" name="feature"
    //           value="photoBooth" />
    //         <label for="photoBooth">Photo Booth</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="prints" name="feature"
    //           value="prints" />
    //         <label for="prints">Prints &amp; Enlargements</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="albums" name="feature"
    //           value="albums" />
    //         <label for="albums">Albums &amp; Photo Books</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="photographer" name="feature"
    //           value="photographer" />
    //         <label for="photographer"> Photographer</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="videographer" name="feature"
    //           value="videographer" />
    //         <label for="videographer">Videographer</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="planner" name="feature"
    //           value="planner" />
    //         <label for="planner">Planner &amp; Consultant</label>
    //       </div>
    //     </div> {/*End  PhotoGraphy */}
    //   </div>{/* End Flower and Photography */}

    //   {/* Venue Catering Rentals */}
    //   <div className="form-row border rounded mb-2">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       {/* venue */}
    //       <div className="venue">
    //         <div className="checker">
    //           <label htmlFor="venue">Venue</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="hotel" name="feature"
    //             value="hotel" />
    //           <label for="hotel">Hotel</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="outdoor" name="feature"
    //             value="outdoor" />
    //           <label for="outdoor">Outdoor</label>
    //         </div>
    //       </div>{/* End Venue */}

    //       {/* Catering */}
    //       <div className="catering">
    //         <div className="checker">
    //           <label htmlFor="catering">Catering</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="foodService" name="feature"
    //             value="foodService" />
    //           <label for="foodService">Event Food Service</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="cake" name="feature"
    //             value="cake" />
    //           <label for="cake">Cake</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="desert" name="feature"
    //             value="desert" />
    //           <label for="desert">Desert</label>
    //         </div>
    //       </div>{/*End Catering */}
    //     </div>
    //     {/* Rentals */}
    //     <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //       <div className="checker">
    //         <label htmlFor="rentals">Rentals</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="accessories" name="feature"
    //           value="accessories" />
    //         <label for="accessories">Event Accessories</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="lighting" name="feature"
    //           value="lighting" />
    //         <label for="lighting">Lighting</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tent" name="feature"
    //           value="tent" />
    //         <label for="tent">Tent</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tablesChairs" name="feature"
    //           value="tablesChairs" />
    //         <label for="tablesChairs">Tables &amp; Chairs</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="transportation" name="feature"
    //           value="transportation" />
    //         <label for="transportation">Transportation</label>
    //       </div>
    //     </div>{/* End Rentals */}
    //   </div>{/* End Venue Catering Rentals */}

    //   {/* Location */}
    //   <div className="form-row  border rounded mb-2">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8">
    //       <label htmlFor="eventLoc">Event Location</label>
    //       <input type="text" className="form-control" id="eventLoc" placeholder="1234 Main St" />
    //     </div>
    //     <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
    //       <label htmlFor="find">Find Address</label>
    //       <br></br>
    //       <button type="button" className="btn btn-secondary" id="search">Search</button>
    //     </div>
    //   </div> {/* End Location */}
    //   {/* Message */}
    //   <div className="form-row  border rounded mb-2">
    //     <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
    //       <label htmlFor="message">Message</label>
    //       <textarea type="text" className="form-control" id="message" name="message" placeholder="Addtional message you want us to know"
    //         rows="4" cols="60"></textarea>
    //     </div>
    //     <div className="form-group col">
    //       <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#warningModal" id="submit">Save</button>
    //     </div>
    //   </div>  
  );
};
export default AddEvent;
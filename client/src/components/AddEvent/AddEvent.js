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
            <option defaultValue>Please Select</option>
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
            <label htmlFor="hairService">Hair Service</label>
          </div>
          <div className="checker">
            <input type="checkbox" id="makeupService" name="feature"
              value="makeupService"
              // name='makeupService'
              checked={props.makeupService}
              onChange={props.handleInputChange}
            />
            <label htmlFor="makeupService">Makeup Service</label>
          </div>
          <div className="checker">
            <input type="checkbox" id="manicurePedicure" name="feature"
              value="manicurePedicure"
              // name='manicurePedicure'
              checked={props.manicurePedicure}
              onChange={props.handleInputChange}
            />
            <label htmlFor="manicurePedicure">Manicure &amp; Pedicure</label>
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
    //         <label htmlFor="hairService">Hair Service</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="makeupService" name="feature"
    //           value="makeupService" />
    //         <label htmlFor="makeupService">Makeup Service</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="manicurePedicure" name="feature"
    //           value="manicurePedicure" />
    //         <label htmlFor="manicurePedicure">Manicure &amp; Pedicure</label>
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
    //           <label htmlFor="dj">DJ</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="mc" name="feature"
    //             value="mc" />
    //           <label htmlFor="mc">MC</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="lighting" name="feature"
    //             value="lighting" />
    //           <label htmlFor="lighting">Entertainment Lighting</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="liveBand" name="feature"
    //             value="liveBand" />
    //           <label htmlFor="liveBand">Live Band</label>
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
    //           <label htmlFor="attendanceGift">Gift for Attendance (Per Person)</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="favors" name="feature"
    //             value="favors" />
    //           <label htmlFor="favors">Favors (Wedding)</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="invitations" name="feature"
    //             value="invitations" />
    //           <label htmlFor="invitations">Invitations</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="programs" name="feature"
    //             value="programs" />
    //           <label htmlFor="programs">Ceremony Programs</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="guestBook" name="feature"
    //             value="guestBook" />
    //           <label htmlFor="guestBook">Guest Book</label>
    //         </div>
    //       </div>{/* End Gifts */}

    //       <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 checkboxes">
    //         <div className="checker">
    //           <input type="checkbox" id="invitationCards" name="feature"
    //             value="invitationCards" />
    //           <label htmlFor="invitationCards">Invitation &amp; Reply Cards</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="receptionMenu" name="feature"
    //             value="receptionMenu" />
    //           <label htmlFor="receptionMenu">Reception Menus</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="dateCards" name="feature"
    //             value="dateCards" />
    //           <label htmlFor="dateCards">Save the Date Cards </label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="tableName" name="feature"
    //             value="tableName" />
    //           <label htmlFor="tableName">Table Name &amp; Escort/Place Cards </label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="thankyouCards" name="feature"
    //             value="thankyouCards" />
    //           <label htmlFor="thankyouCards">Thank You Cards </label>
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
    //         <label htmlFor="bouquets">Bouquets</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="boutonnieres" name="feature"
    //           value="boutonnieres" />
    //         <label htmlFor="boutonnieres">Boutonnieres/Corsages</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="eventDecoration" name="feature"
    //           value="eventDecoration" />
    //         <label htmlFor="eventDecoration">Event Decoration</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="flowers" name="feature"
    //           value="flowers" />
    //         <label htmlFor="flowers">Flowers</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="eventFlowers" name="feature"
    //           value="eventFlowers" />
    //         <label htmlFor="eventFlowers">Event Flowers &amp; Arrangements</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tableCenterpieces" name="feature"
    //           value="tableCenterpieces" />
    //         <label htmlFor="tableCenterpieces">Event Table Centerpieces</label>
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
    //         <label htmlFor="dvd">Digital/Photo DVD</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="engagments" name="feature"
    //           value="engagments" />
    //         <label htmlFor="engagments">Engagement Sessions (Wedding)</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="photoBooth" name="feature"
    //           value="photoBooth" />
    //         <label htmlFor="photoBooth">Photo Booth</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="prints" name="feature"
    //           value="prints" />
    //         <label htmlFor="prints">Prints &amp; Enlargements</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="albums" name="feature"
    //           value="albums" />
    //         <label htmlFor="albums">Albums &amp; Photo Books</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="photographer" name="feature"
    //           value="photographer" />
    //         <label htmlFor="photographer"> Photographer</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="videographer" name="feature"
    //           value="videographer" />
    //         <label htmlFor="videographer">Videographer</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="planner" name="feature"
    //           value="planner" />
    //         <label htmlFor="planner">Planner &amp; Consultant</label>
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
    //           <label htmlFor="hotel">Hotel</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="outdoor" name="feature"
    //             value="outdoor" />
    //           <label htmlFor="outdoor">Outdoor</label>
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
    //           <label htmlFor="foodService">Event Food Service</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="cake" name="feature"
    //             value="cake" />
    //           <label htmlFor="cake">Cake</label>
    //         </div>
    //         <div className="checker">
    //           <input type="checkbox" id="desert" name="feature"
    //             value="desert" />
    //           <label htmlFor="desert">Desert</label>
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
    //         <label htmlFor="accessories">Event Accessories</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="lighting" name="feature"
    //           value="lighting" />
    //         <label htmlFor="lighting">Lighting</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tent" name="feature"
    //           value="tent" />
    //         <label htmlFor="tent">Tent</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="tablesChairs" name="feature"
    //           value="tablesChairs" />
    //         <label htmlFor="tablesChairs">Tables &amp; Chairs</label>
    //       </div>
    //       <div className="checker">
    //         <input type="checkbox" id="transportation" name="feature"
    //           value="transportation" />
    //         <label htmlFor="transportation">Transportation</label>
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
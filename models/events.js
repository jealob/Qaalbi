var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a newEventsSchema object
// This is similar to a Sequelize model
var EventsSchema = new Schema({
  token: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,

  },
  email: {
    type: String,
    trim: true,

  },
  phone: {
    type: Number,
    trim: true,

  },
  contactOptions: {
    type: String,
    trim: true,
  },
  eventDate: {
    type: Date,
    trim: true,
  },
  hairService: {
    type: Boolean,
    default: false
  },
  makeupService: {
    type: Boolean,
    default: false
  },
  manicurePedicure: {
    type: Boolean,
    default: false
  },



  // eventType: {
  //     type: String,
  //     trim: true,
  //   },
  //   beauty: {
  //     type: String,
  //     trim: true,
  //   },
  //   entertainment: {
  //     type: String,
  //     trim: true,
  //   },
  //   flowersAndDecors: {
  //     type: String,
  //     trim: true,
  //   },
  //   giftsAndFavors: {
  //     type: String,
  //     trim: true,
  //   },
  //   photoAndVideos: {
  //     type: String,
  //     trim: true,
  //   },
  //   venue: {
  //     type: String,
  //     trim: true,
  //   },
  //   catering: {
  //     type: String,
  //     trim: true,
  //   },
  //   rentals: {
  //     type: String,
  //     trim: true,
  //   }

});

// This creates our model from the above schema, using mongoose's model method
var Event = mongoose.model("Event", EventsSchema);

// Export the Event model
module.exports = Event;


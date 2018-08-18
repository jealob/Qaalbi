var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a newEventsSchema object
// This is similar to a Sequelize model
var EventsSchema = new Schema({
  
  eventType: {
    type: String,
    trim: true,
  },
  beauty: {
    type: String,
    trim: true,
  },
  entertainment: {
    type: String,
    trim: true,
  },
  flowersAndDecors: {
    type: String,
    trim: true,
  },
  giftsAndFavors: {
    type: String,
    trim: true,
  },
  photoAndVideos: {
    type: String,
    trim: true,
  },
  venue: {
    type: String,
    trim: true,
  },
  catering: {
    type: String,
    trim: true,
  },
  rentals: {
    type: String,
    trim: true,
  }
  
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("Events", EventsSchema);

// Export the Event model
module.exports = Events;


var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  firstName: {
    type: String,
    trim: true,
    
  },
  lastName: {
    type: String,
    trim: true,
    
  },
  picture: {
    type: String,
    trim: true,
   
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    
  },

  online: {
  type: Boolean,
  default: false
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },

  //The Following Schema part will be in another js file in the furur ! (Saad futur Project lol)
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
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;


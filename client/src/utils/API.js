import axios from "axios";

export default {  
    // Gets a user
    getUserData: function(email) {
      return axios.get("/api/users/" + email);
    },
    // Deletes the user with the given id
    deleteUser: function(email) {
      return axios.delete("/api/users/" + email);
    },
    // Saves a user to the database
    saveUser: function(email,userData) {
      return axios.post("/api/users/" + email, userData);
    },
    // Gets user metadata from Auth0
    getUserMetadata : function () {
      return axios.get('https://kratos7.auth0.com/.well-known/jwks.json');
    },
    // Gets all events
    getAllEvents: function() {
      return axios.get("/api/events");
    },
   // Saves an event to the database
    saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  
  };

 
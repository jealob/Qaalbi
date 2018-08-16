import axios from "axios";

export default {  
    // Gets all users
    getSavedUser: function(email) {
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
    }
  };
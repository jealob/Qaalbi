import axios from "axios";

export default {  
    // Gets all users
    getSavedUsers: function(email) {
      return axios.get("/api/users/" + email);
    },
    // Deletes the user with the given id
    deleteUser: function(email) {
      return axios.delete("/api/users/" + email);
    },
    // Saves a user to the database
    saveUser: function(userData) {
      return axios.post("/api/users/login", userData);
    }
  };
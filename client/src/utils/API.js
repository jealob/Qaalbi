import axios from "axios";

export default {
  // Gets a user
  getUserData: function (email) {
    return axios.get("/api/users/" + email);
  },
  //Gets a user by token
  getUserByToken: function (token) {
    return axios.get("/api/users/" + token);
  },
  // Deletes the user with the given id
  deleteUser: function (email) {
    return axios.delete("/api/users/" + email);
  },
  // Saves a user to the database
  saveUser: function (email, userData) {
    return axios.post("/api/users/" + email, userData);
  },
  // Gets user metadata from Auth0
  getUserMetadata: function () {
    return axios.get('https://kratos7.auth0.com/.well-known/jwks.json');
  },
  // Gets all events
  getAllEvents: function () {
    return axios.get("/api/events");
  },
  // Saves an event to the database
  saveEvent: function (eventData) {
    console.log(eventData);
    return axios.post("/api/events", eventData);
  },
  getEvent: function (eventData) {
    console.log(eventData);
    return axios.get(`api/events/${eventData.eventYear}/${eventData.eventMonth}/${eventData.firstName}/${eventData.lastName}`);
  }

};


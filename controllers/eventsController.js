const db = require("../models");

// Defining methods for the usersController
module.exports = {

  //eventsController starts here :
  findAllEvents: function (req, res) {
    db.Events
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    let query = req.params
    console.log( `${query.firstname} ${query.lastname}`)
    db.Events
      .find(
        {name: `${query.firstname} ${query.lastname}`,
        // eventDate: query.date
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createEvent: function (req, res) {
    db.Events
      .create(req.body)
      .then(function(dbEvents) {
        // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        //email: dbEvents.email
       
        return db.User.findOneAndUpdate({token: dbEvents.token}, { $push: { events: dbEvents._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};


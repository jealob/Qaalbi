const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User
      .findOne({ email: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmailAndUpsert: function (req, res) {
    //if(req.query.includes("email"))
    db.User
      .findOneAndUpdate({ email: req.params.email }, req.body,{upsert:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    //if(req.query.includes("email"))
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
};

// .then(function(dbEvents) {
//   // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//   // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//   // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//   //email: dbEvents.email
  
//   return db.User.findOneAndUpdate({email: dbEvents.email}, { $push: { events: dbEvents._id } }, { new: true });
// })
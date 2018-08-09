const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/api/events", function (req, res) {
//   res.json({
//     hello: "Hello World"
//   });
//   res.end();
// });

// app.get("/api/dashboard", function (req, res) {
//   res.json({
//     hello: "Hello Dashboard"
//   });
//   res.end();
// });

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/QaalbiDB");

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

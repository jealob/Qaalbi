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
else {
  app.use(express.static("client/public"));
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

<<<<<<< HEAD
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }
  else {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  }


});
=======
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/QaalbiDB");
>>>>>>> 9029201a450ddb3a16242f806916db3ac7ccf709

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  app.use(express.static("client/public"));
}

app.get("/api/events", function (req, res) {
  res.json({
    hello: "Hello World"
  });
  res.end();
});

app.get("/api/dashboard", function (req, res) {
  res.json({
    hello: "Hello Dashboard"
  });
  res.end();
});

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

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

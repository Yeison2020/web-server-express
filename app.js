const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Home page here");
});

app.get("/hello-mundo", function (req, res) {
  res.send("Hello World Working with express");
});

// Any routes that is not define here will be send to this route

app.get("*", function (req, res) {
  res.send("Sorry Route still being built");
});
console.log("Listening in port ", 8080);

app.listen(8080);

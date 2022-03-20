const express = require("express");
const app = express();
const port = 8080;

// Middleware static content

// Here express is using my public folder
app.use(express.static("public"));

// Body of my request

app.get("/", (req, res) => {
  res.send("Home page here");
});

app.get("/hello-mundo", (req, res) => {
  res.send("Hello World Working with express");
});

// Any routes that is not define here will be send to this route
// Error pages how to handle them

app.get("*", (req, res) => {
  res.send("Sorry Route still being built");
});
console.log("Listening in port ", 8080);

// Best way to change the port running in one place
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

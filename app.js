const express = require("express");
const app = express();
const port = 8080;

// Middleware static content

// Here express is using my public folder
// This the path of my "/"
app.use(express.static("public"));

// Body of my request

// app.get("/", (req, res) => {
//   res.send("Home page here");
// });

// Here using my public to display my route hola-mundo
app.get("/hello-mundo", (req, res) => {
  res.send("Hello World Working with express");
});

// Any routes that is not define here will be send to this route
// Error pages how to handle them

app.get("*", (req, res) => {
  // I needed to send myself to a file and also add It's unique path using __dirname
  res.sendFile(__dirname + "/public/404.html");
});
console.log("Listening in port ", 8080);

// Best way to change the port running in one place
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

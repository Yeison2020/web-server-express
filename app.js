const express = require("express");

const app = express();

app.get((req, res) => {
  res.send("Hello World Working with express");
});
console.log("Listening in port ", 8080);

app.listen(8080);

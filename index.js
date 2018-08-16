const express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(8080, () => {
  console.log("====================================");
  console.log("Listening on port 8080");
  console.log("====================================");
});

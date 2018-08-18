const express = require("express");
var app = express();
var port = process.env.PORT || 8080
app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
  console.log("====================================");
  console.log("Listening on port 8080");
  console.log("====================================");
});

//express app serving index.html

const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  app.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

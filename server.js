const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Update");
});

app.listen(5000, () => console.log("Server running"));
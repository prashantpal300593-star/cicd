const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Updated again");
});

app.listen(5000, () => console.log("Server running"));
const express = require("express");

const app = express();

let visitors = 0;

app.get("/count", (req, res) => {
  visitors++;
  res.json({
    count: visitors
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

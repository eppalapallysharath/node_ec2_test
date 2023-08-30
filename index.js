const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  return res.send(`Iam node server  port: ${port}`);
});

app.listen(port, () => {
  console.log("server started");
});

const fs = require("fs");
const path = require('path');
const express = require("express");
const { env } = require("process");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;


app.use(cors());
// const HTMLfile = fs.readFileSync("index.html", "utf-8");

// The code to host the files locally
const static_path = path.join(__dirname, "public");

app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("File is uploading...");
  res.end();
});
app.listen(port, () => {
  console.log("We are live");
});

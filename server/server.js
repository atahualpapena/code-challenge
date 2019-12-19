const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/photos", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(`Error occured: ${error} `);
    });
});

app.get("/albums", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/albums?_limit=10")
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json("Error occured!");
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "404.html"));
});

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
});

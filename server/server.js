const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");

const PORT = 3000;
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
    .get("https://jsonplaceholder.typicode.com/albums")
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(`Error occured: ${error}`);
    });
});

app.get("/albums/:id", (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${req.params.id}`)
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(`Error ocurred: ${error}`);
    });
});

app.get("/photos/:albumId", (req, res) => {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${req.params.albumId}`
    )
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      res.json(`Error ocurred: ${error}`);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "404.html"));
});

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`);
});

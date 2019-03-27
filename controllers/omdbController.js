const db = require("../models");
const axios = require("axios");



module.exports = {
  findMoviePoster: function (req, res) {

    var url = "http://www.omdbapi.com/?t=" + req.query.t.split(' ').join('%20') + "&y=&plot=short&apikey=trilogy";

    console.log("url from omdbController: " + (url));

    axios
      .get(url)
      .then(results => results.data)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};
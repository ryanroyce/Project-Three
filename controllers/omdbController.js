const db = require("../models");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {

    var url =  "http://www.omdbapi.com/?t="+req.query.t+"&y=&plot=short&apikey=trilogy";
    //The following code uses axios to access the IMDB API and pull up the specified data//
        // axios.get(url,{params: req.query+ "&apikey=trilogy"})

        console.log("url: "+(url));
        axios.get(url)
        .then(results => res.json(results.data));



}
  
  
};
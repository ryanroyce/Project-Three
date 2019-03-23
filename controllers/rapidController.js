// const db = require("../models");
const axios = require("axios");
// Defining methods for the booksController
module.exports = {

 movieTitle: "", 


 findAll: function(req, res) {

// http://localhost:3000/api/rapid/?Ids=Movie%2F200000

var unirest = require('unirest');

// console.log("LOOOOKK AT THIS:" + req.query);

var movieSearch = Math.floor(Math.random() * (Math.floor(200001) -Math.ceil(1))) +Math.ceil(1);

console.log("LOOOOKK AT THIS:" + movieSearch);

unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
.header("X-RapidAPI-Key", "f1492b112dmshbdafbfc0abaf237p169afdjsna4423e15beef")
.header("Content-Type", "application/json")
.query("Ids=Movie%2F" + movieSearch)
// .then(results => res.json(results));
.then(
  function(results){
    if (results){
      console.log("LOOOOKK AT THIS:" +results.body.Hits[0].Source.Title);
      movieTitle = results.body.Hits[0].Source.Title;
      console.log(movieTitle);
      return res.json(results);
      
    }

    else {findAll()};
  }
);


  
},

findGenre: function(req, res) {
 
  
  var unirest = require('unirest');
  
  
  console.log("Genres="+req.params.genre);
  unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
  .header("X-RapidAPI-Key", "f1492b112dmshbdafbfc0abaf237p169afdjsna4423e15beef")
  .header("Content-Type", "application/json")
  .query("Genres="+req.params.genre)
  .query("ReleaseCountries=US") 
  .then(results => res.json(results));
 
  
  },

  findProvider: function(req, res) {

    var unirest = require('unirest');
    
   
    console.log("Providers="+req.params.providers);
    unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
    .header("X-RapidAPI-Key", "f1492b112dmshbdafbfc0abaf237p169afdjsna4423e15beef")
    .header("Content-Type", "application/json")
    .query("Providers="+req.params.providers)
    .query("ReleaseCountries=US") 
    .then(results => res.json(results));
    
    },

    findProviderAndGenre: function(req, res) {

      var unirest = require('unirest');
      
     
      // console.log("Providers="+req.params.providers);
      unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
      .header("X-RapidAPI-Key", "f1492b112dmshbdafbfc0abaf237p169afdjsna4423e15beef")
      .header("Content-Type", "application/json")
      .query("Providers="+req.params.providers)
      .query("Genres="+req.params.genre)
      // .query("ReleaseCountries=US") 
      .then(results => res.json(results));
      
      }
};
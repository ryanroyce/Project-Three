const db = require("../models");
const axios = require("axios");
const rapidController = require("./rapidController");
// Defining methods for the booksController
module.exports = {
  findMoviePoster: function(omdbTitle) {
  // omdbTitle = rapidController.movieTitle;
 
    var url =  "http://www.omdbapi.com/?t="+omdbTitle+"&y=&plot=short&apikey=trilogy";
    //The following code uses axios to access the IMDB API and pull up the specified data//
        // axios.get(url,{params: req.query+ "&apikey=trilogy"})

        console.log("url: "+(url));
        axios.get(url)
       .then( function(results){
         console.log(results.data.Title);
        //  return results.data.Title;
       })
       



}
  
  
};
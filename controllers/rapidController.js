var keys = require("../keys");
var APIKey = keys.KEY;
console.log("THIS IS THE API KEY!!!  " + APIKey)

module.exports = {

  movieTitle: "",

  findAll: function findMovie(req, res) {

    var unirest = require('unirest');
    var movieSearch = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) + Math.ceil(1);
    // console.log("THIS SHOULD BE YOUR API KEY:" + APIKey)
    console.log("Movie Number from Controller: " + movieSearch);

    unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
      .header("X-RapidAPI-Key", `${APIKey}`)
      .header("Content-Type", "application/json")
      .query("Ids=Movie%2F" + movieSearch)
      .query("ReleaseCountries=US")
      .query("ProgramTypes=Movie")
      .then(
        
        validate = results => {
          if (typeof results.body.Hits[0] === "undefined") {
            findMovie(req, res);
          }

          else {

            function recycle(res) {

              console.log("Title from RapidController: " + results.body.Hits[0].Source.Title);
              var randomMovie = results.body.Hits[0].Source.Title;

              unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
                .header("X-RapidAPI-Key", `${APIKey}`)
                .header("Content-Type", "application/json")
                .query("Title=" + randomMovie.split(' ').join('+'))
                .then(results => res.json(results));

            }

            recycle(res);

          }

        });

  },

  findGenre: function findMovieGenre  (req, res) {

    var unirest = require('unirest');
    var randomNum = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) + Math.ceil(1);
    //math.floor will be set to 78996 during final product, just need to limit api calls for testing//
    console.log("Genres=" + req.params.genre);
    unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
      .header("X-RapidAPI-Key", `${APIKey}`)
      .header("Content-Type", "application/json")
      .query("Genres=" + req.params.genre)
      .query("ReleaseCountries=US")
      .query("Skip=" + randomNum)
      .query("Take=1")
      .query("ProgramTypes=Movie")
      .then(

        validate = results => {
          if (typeof results.body.Hits[0] === "undefined") {
            findMovieGenre(req, res);
          }

          else {

            function recycle(res) {

              console.log("Title from RapidController: " + results.body.Hits[0].Source.Title);
              var randomMovie = results.body.Hits[0].Source.Title;

              unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
                .header("X-RapidAPI-Key", `${APIKey}`)
                .header("Content-Type", "application/json")
                .query("Title=" + randomMovie.split(' ').join('+'))
                .then(results => res.json(results));

            }

            recycle(res);

          }

        }

      );

  },

  findProvider: function findProviderMovie (req, res) {

    var unirest = require('unirest');
    var randomNum = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) + Math.ceil(1);
    console.log("Providers=" + req.params.providers);
    unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
      .header("X-RapidAPI-Key", `${APIKey}`)
      .header("Content-Type", "application/json")
      .query("Providers=" + req.params.providers)
      // .query("ReleaseCountries=US")
      .query("Skip=" + randomNum)
      .query("Take=1")
      .query("ProgramTypes=Movie")
      .then(

        validate = results => {
          if (typeof results.body.Hits[0] === "undefined") {
            findProviderMovie(req, res);
          }

          else {

            function recycle(res) {

              console.log("Title from RapidController: " + results.body.Hits[0].Source.Title);
              var randomMovie = results.body.Hits[0].Source.Title;

              unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
                .header("X-RapidAPI-Key", `${APIKey}`)
                .header("Content-Type", "application/json")
                .query("Title=" + randomMovie.split(' ').join('+'))
                .then(results => res.json(results));

            }

            recycle(res);

          }

        }

      );

  },

  findProviderAndGenre: function findProviderAndGenreMovie (req, res) {

    var unirest = require('unirest');
    var randomNum = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) + Math.ceil(1);

    unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
      .header("X-RapidAPI-Key", `${APIKey}`)
      .header("Content-Type", "application/json")
      .query("Providers=" + req.params.providers)
      .query("Genres=" + req.params.genre)
      // .query("ReleaseCountries=US") 
      .query("Skip=" + randomNum)
      .query("Take=1")
      .query("ProgramTypes=Movie")
      .then(

        validate = results => {
          if (typeof results.body.Hits[0] === "undefined") {
            findProviderMovie(req, res);
          }

          else {

            function recycle(res) {

              console.log("Title from RapidController: " + results.body.Hits[0].Source.Title);
              var randomMovie = results.body.Hits[0].Source.Title;

              unirest.get("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/")
                .header("X-RapidAPI-Key", `${APIKey}`)
                .header("Content-Type", "application/json")
                .query("Title=" + randomMovie.split(' ').join('+'))
                .then(results => res.json(results));

            }

            recycle(res);

          }

        }

      );

  }
};
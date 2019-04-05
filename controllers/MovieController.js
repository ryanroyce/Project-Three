const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findSaved: function(req, res){
    console.log("!!!!!!!!!!!!!!!!!!!" + req.session.user)
 db.User
 .findOne({username: req.session.user})
    .then(function(user){
 
        // console.log("SSSSSSSSSSSSSSSS"+user.movies);
        res.json(user.movies);
 
    })
  },


  findAll: function(req, res) {
    console.log(req);
    db.Movie
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Movie
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create:  function(req, res) {


    console.log("user in moviecontroller line 36:"+req.session.user  );
 
    db.Movie
      .create(req.body)
      .then(function(dbMovie){
       return db.User.findOneAndUpdate({username : req.session.user}, { $push: { movies: dbMovie } }, { new: true })
      })
      .then(dbModel => res.json(dbModel))
 
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({username: req.session.user}, {genre: req.params.genre})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(req.params.id);
    console.log(req.session.user);
    db.User.update( 
      { username: req.session.user},
      { $pull: { movies : { _id : req.params.id } } },
      { safe: true },
      function removeConnectionsCB(err, obj) {
          res.json(obj);
      });
    }
};

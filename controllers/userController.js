const dB = require('../models')
// const passport = require('../passport')
const bcrypt = require('bcryptjs');


module.exports = {

create: function(req, res) {
   const { username, password } = req.body
   dB.User.findOne({ username: username }, (err, user) => { 
    if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new   dB.User({
                username: username,
                password: password
            })
            console.log("after new User: ",username, password, user);  
            newUser.save((err, savedUser) => { 
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
},
validate: function (req, res) {
    dB.User.findOne({
        username: req.body.username
    }).then(function (user) {
      if (!user) {
        res.json( false);
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result === true) {
            res.json(result);
          } else {
            res.json(false);
          }
        });
      }
    });
  },
checkUsername: function(req, res) {
  dB.User.findOne({
    username: req.body.username
  }).then(function (user) {
    console.log(user)
    if(username)
         res.json(true);
    else 
        res.json(false);
  })
}
};

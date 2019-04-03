const dB = require('../models')
const passport = require('../passport')
const bcrypt = require('bcryptjs');


module.exports = {

create: function(req, res) {
   const { username, password } = req.body
   return dB.User.findOne({ username: username }, (err, user) => { 
    if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            console.log("User Exists")
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
            return newUser.save((err, savedUser) => { 
                if (err) return res.json(err)
                return res.json(savedUser)
            })
        }
    })
},

// validate: function (req, res) {
    // dB.User.findOne({
    //     username: req.body.username
    // }).then(function (user) {
    //   if (!user) {
    //     res.json(false);
    //   } else {
    //     bcrypt.compare(req.body.password, user.password, function (err, result) {
    //       if (result === true) {
    //         req.session.username = req.body.username;
    //         res.json(result);
    //       } else {
    //         res.json(false);
    //       }
    //     });
    //   }
    // });

  // },

getUser: function(req, res) {
  router.get('/', (req, res) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        alert("THIS NOT WORKIN FOR ME DOG")
        res.json({ user: null })
    }
})
},

// deleteUser: function(req, res) {

// }
};

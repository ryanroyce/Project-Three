const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport");


// Matches with "/api/users"
router.route("/sign-up")
  .post(userController.create);

// router.route("/save-movie")
//   .post(userController.newUserMovie);

router.route("/")
  // .get(userController.getUser)
  .post(
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };

     
        req.session.user =  req.user.username
        res.send(userInfo);
    }
)

router.route("/logout")
.post(
  function (req, res) {
    if (req.user) {
      console.log("logging out user")
      req.logout()
      res.send({ msg: 'logging out' })
    } else {
      res.send({ msg: 'no user to log out' })
    }
  })

// router.post('/logout', (req, res) => {
//   if (req.user) {
//       req.logout()
//       res.send({ msg: 'logging out' })
//   } else {
//       res.send({ msg: 'no user to log out' })
//   }
// })





module.exports = router;
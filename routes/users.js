const express = require('express');
const router = express.Router();
const passport = require('../passport');
const { pass } = require('../passport/login');

//this is how passport usually works but
// router.post('/signup', passport.authenticate('local-signup', {
//   successRedirect: "/",
//   failureRedirect: "/",
//   session: false
// }));

//for our case, i want a json object, so i need a custom callback
router.post('/signup', (req, res, next) => {
  //custom passport callback with json
  passport.authenticate('local-signup', function(error, user, info) {
    if(error){
      res.sendStatus(500).json({
        message: "Oops, something went wrong",
        error: error.message ||  'Internal Server Error'
      });
    } else {
      return res.json({
        message: "User is authenticated! :)"
      });
    }
  })(req, res, next);
});

router.post('/login', passport.authenticate('local-login ', {
  successRedirect: "/",
  failureRedirect: "/",
  session: false
}));

module.exports = router;

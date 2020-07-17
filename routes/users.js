const express = require('express');
const router = express.Router();
const passport = require('../passport/index');

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
      return res.status(500).json({
        message: error || "Oops, something went wrong",
      });
    } 
    
    return res.json({
      message: "User is authenticated and logged in! :)"
    });

  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  //custom passport callback with json
  passport.authenticate('local-login', function(error, user, info) {
    if(error){
      return res.status(500).json({
        message: error || "Oops, something went wrong",
      });
    } 
    
    return res.json({
      message: "User is authenticated and logged in! :)"
    });

  })(req, res, next);
});

module.exports = router;

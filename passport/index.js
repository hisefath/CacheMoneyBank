const passport = require('passport');

//import all auth strategies
const signupStrategy = require('./signup');
const signinStrategy = require('./signin');
// const googleStrategy = require('./google');
// const twitterStrategy = require('./twitter');
// const githubStrategy = require('./github');

passport.use('local-signup', signupStrategy);
passport.use('local-signin', signinStrategy);

module.exports = passport;
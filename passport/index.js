const passport = require('passport');

//import all auth strategies
const signupStrategy = require('./signup');
const loginStrategy = require('./login');
// const googleStrategy = require('./google');
// const twitterStrategy = require('./twitter');
// const githubStrategy = require('./github');

passport.use('local-signup', signupStrategy);
passport.use('local-login', loginStrategy);

module.exports = passport;
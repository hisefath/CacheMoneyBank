const Strategy = require('passport-local').Strategy;

const SignupStrategy = new LocalStrategy(
    function(username, password, callback){
        //logic after user is signed up
        
    }
); 

module.exports = SignupStrategy;
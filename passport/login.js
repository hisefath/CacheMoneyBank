const Strategy = require('passport-local').Strategy;

const LoginStrategy = new Strategy(
    function(username, password, callback){
        //logic after user is signed up
        
    }
); 

module.exports = LoginStrategy; 
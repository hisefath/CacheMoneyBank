const Strategy = require('passport-local').Strategy;

const SignupStrategy = new Strategy(
    function(username, password, done){
        const user = username; 
        //logic after user is signed up
        
        done('user signed in', null)
    }
); 

//Example of taking in more than username and password at sign up
// const SignupStrategy = new Strategy(
//     { passReqToCallback: true },
//     function(req, username, password, done){
//         const otherfieldsBesidesUsernamePassword = req.body.about;
//         const user = username; 
//         //logic after user is signed up
        
//         done('user signed in', null)
//     }
// ); 

module.exports = SignupStrategy;
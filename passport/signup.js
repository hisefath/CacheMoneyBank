const Strategy = require('passport-local').Strategy;
const { User } = require('../db/models/index');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
    { passReqToCallback: true, usernameField: "email" },
    function(req, email, password, done){
        // const email = req.body.email;
        
        User.findOne({ email }).lean().exec((error, user) => {
            if(error){ 
                return done(error, null);
            }
            if(user){
                return done('User already exists', null);
            }

            const encryptedPassword = bcrypt.hashSync(password, salt);
            let newUser = new User({
                email,
                password: encryptedPassword
            });

            newUser.save((error, userDocument) => {
                if (error) {
                    return done(error, null);
                } else {
                    return done(null, userDocument);
                }
            });
        });
}); 

module.exports = SignupStrategy;
const Strategy = require('passport-local').Strategy;
const { User } = require('../db/models/index');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const LoginStrategy = new Strategy(
    { usernameField: "email" },
    function(email, password, done){
        User.findOne({ email }).lean().exec((error, user) => {
            if(error){ 
                return done(error, null);
            }
            if(!user){
                return done('No User found :c', null);
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password);

            if(!isPasswordValid){
                return done('Password not valid', null);
            }

            return done(null, user);
        });
    });

module.exports = LoginStrategy; 
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('./db/mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const passport = require('./passport');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);

app.use(passport.initialize());
// app.use(passport.session());s

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});

module.exports = app;

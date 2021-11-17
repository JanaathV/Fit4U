//      File Name: app.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose, { mongo } from 'mongoose';

//import modules for authentication
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// authentication objects
let localStrategy = passportLocal.Strategy; // alias
import User from '../Models/user';
import flash from 'connect-flash'; //import module to authorize messaging/error management
import cors from 'cors';        // module for cors

// import the index router and inject a reference here
import indexRouter from '../Routes/index';
import competitorRouter from '../Routes/competitor';
import matchRouter from '../Routes/match';
import tournamentRouter from '../Routes/tournament';
// Express Web App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// DB Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection; // alias for the mongoose connection
db.on("error", function()
{
  console.error("connection error");
});

db.once("open", function()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// add support for cors
app.use(cors());

// setup express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // initialize flash

// implement an Authorization Strategy - username/password
passport.use(User.createStrategy());

// serialize and deserialize the user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// perform routing
app.use('/', indexRouter);
app.use('/competitor-list', competitorRouter); // create a separate "area" of our web application
app.use('/match-list', matchRouter); 
app.use('/tournament-list', tournamentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next: express.NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;

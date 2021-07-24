require("dotenv").config()
const passport = require('passport');
const {v4: uuidv4} = require('uuid');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user.model')
const {newToken} = require('../controllers/auth.controller')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2244/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
      let user = await User.findOne({email: profile?._json?.email})
    let token;
    if(!user) {
      user = await User.create({email: profile?._json?.email, password: uuidv4()})
    }
    token  = newToken(user)
    return done(null, {user, token})
  }
));

module.exports = passport;
const express = require("express");

const passport = require("./config/passport");

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

const  {signup, signin, user } = require("./controllers/auth.controller")

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/auth/google',
  passport.authenticate('google', { scope: 
        [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ] 
    }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      const {user, token} = req.user;
      res.status(200).json({user, token})
  });

app.post("/signup", signup);
app.post("/signin", signin);
app.get("/users", user)

module.exports = app;
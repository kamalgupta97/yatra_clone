const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());
const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

const  {signup, signin, user } = require("./controllers/auth.controller")
const busController = require("./controllers/bus.controller")
const stopController = require("./controllers/stop.controller")
const cityController = require("./controllers/city.controller")

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
      /// res.redirect("/")
      return res.status(200).json({user, token})
  });

app.post("/signup", signup);
app.post("/signin", signin);
app.get("/users", user)

app.use("/buses", busController)
app.use("/stops", stopController)
app.use("/city", cityController)

module.exports = app;

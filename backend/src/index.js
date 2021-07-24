const express = require("express");
const app = express();
app.use(express.json());
const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

const  {signup, signin, user } = require("./controllers/auth.controller")

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
})

const busServiceController = require("./controllers/busService");
const bookingController = require("./controllers/booking");
const customerController = require("./controllers/customer");
const routeController = require("./controllers/route");
const dropBoardPointController = require("./controllers/dropBoardPoint");
const busController = require("./controllers/bus");

app.use("/api/busservice", busServiceController);
app.use("/api/booking", bookingController);
app.use("/api/customers", customerController);
app.use("/api/routes", routeController);
app.use("/api/location", dropBoardPointController);
app.use("/api/bus", busController)


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
// app.get("/users", user)

module.exports = app;

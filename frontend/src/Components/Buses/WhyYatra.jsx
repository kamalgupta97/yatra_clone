import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: " auto",
  },
  media: {
    height: "100vh",
  },
});

export default function WhyYatra() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            Why Make a Bus Booking With Yatra
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Book Bus Tickets
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bus booking can be quite a hassle if you physically had to go to the
            state transport office or the local bus depot to make buy your
            tickets. The long queues and the risk of high exposure in times of
            the pandemic forces one to make an online bus booking instead. Enter
            Yatra where purchasing bus tickets is easy as a pie. Yatra’s vast
            repository of bus routes serving up some of the best state-owned and
            private operators in the market, offering a range of fleet from
            which you can choose and do a price compare and check their schedule
            before closing your online bus ticket booking. Yatra’s smart
            filters, its range of bus schedule and fleet and a deep-rooted
            network across the country that connect some of the tier 1 cities
            with tier 2 and 3 and so on. But more importantly, to make your
            travel budget friendly, Yatra has a range of on-going bus offers
            that come with flat discounts as well as eCash redemption offers on
            your bus booking. Among top reasons to book with Yatra is its
            inventory of more than 100,000 routes, the availability of road
            transport buses, attractive discounts and a chance to earn and burn
            your eCash.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Bus Booking offers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            If it is bus booking offers you are scouting for, you are going to
            find plenty on Yatra. At any time of the year you will come across
            exciting discounts and promo code offers encouraging you to seal
            your bus booking. This includes long weekend, festive season as well
            as high-season offers that typically come with a coupon code and an
            attractive flat discount on your bus booking. From year-end sale to
            eCash redemption opportunities, there are some deals that let you
            avail up to 16% off on your bus booking on applying the promo code
            YTBUS
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            How to Make a Bus Booking on Yatra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Yatra’s Bus search console is an extremely user-friendly one. All
            you need to do is head to the Bus section and type your starting and
            onward destination aside from your date of journey. The subsequent
            page will give you the operator name and category of fleet,
            departure time, total duration of the journey, arrival time, and
            tariff. You can choose from a range of fleets such as non-AC
            seater/sleeper, AC seater/sleeper, Bharat Benz AC seater/sleeper,
            Multi-axle AC sleeper, AC sleeper among others. The boarding and
            drop points along with their timings for each bus is mentioned under
            the duration. Choose the one most convenient to you and click
            ‘select seats’. In the following page you will be able to glimpse
            the seating arrangement aboard the fleet, and choose your seats
            according to availability. Further to that select your boarding and
            drop off points from the drop-down and click ‘confirm seats’. In the
            next page you can review your booking and go on to enter the
            passenger details which includes your phone number, email id,
            passenger name, gender and age, and proceed to make the payment. On
            the right hand panel you are prompted the promo code of the on-going
            deals and offers. You can apply the promo code if required and go
            ahead and confirm your booking. Your e-ticket is further sent to
            your registered email id.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

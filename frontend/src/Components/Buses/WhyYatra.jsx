import React, { useState } from "react";
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
  heading: {
    fontSize: "22px",
    color: "#F34F4F",
    fontWeight: "500",
  },

  headingTopic: {
    marginTop: " 20px",
    color: "#333333",
    fontWeight: "600",
  },
  details: {
    fontSize: "13px",
    color: "#333333",
    lineHeight: "28px",
    marginTop: "7px",
  },
});

export default function WhyYatra() {
  const classes = useStyles();

  // const [cardHeight, setCardHeight] = useState(true);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* style={{ height: `${cardHeight ? "300px" : "auto"}` }} */}
        <CardContent>
          <h1 className={classes.heading}>Why Make a Bus Booking With Yatra</h1>

          <h3 className={classes.headingTopic}>Book Bus Tickets</h3>

          <p className={classes.details}>
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
          </p>

          <h3 className={classes.headingTopic}>Bus Booking offers</h3>

          <p className={classes.details}>
            If it is bus booking offers you are scouting for, you are going to
            find plenty on Yatra. At any time of the year you will come across
            exciting discounts and promo code offers encouraging you to seal
            your bus booking. This includes long weekend, festive season as well
            as high-season offers that typically come with a coupon code and an
            attractive flat discount on your bus booking. From year-end sale to
            eCash redemption opportunities, there are some deals that let you
            avail up to 16% off on your bus booking on applying the promo code
            YTBUS
          </p>

          {/* <h3 className={classes.headingTopic}>
            How to Make a Bus Booking on Yatra
          </h3>

          <p className={classes.details}>
            Yatra’s Bus search console is an extremely user-friendly one.
            <li>
              All you need to do is head to the Bus section and type your
              starting and onward destination aside from your date of journey.
            </li>
            <li>
              The subsequent page will give you the operator name and category
              of fleet, departure time, total duration of the journey, arrival
              time, and tariff. You can choose from a range of fleets such as
              non-AC seater/sleeper, AC seater/sleeper, Bharat Benz AC
              seater/sleeper, Multi-axle AC sleeper, AC sleeper among others.
              The boarding and drop points along with their timings for each bus
              is mentioned under the duration. Choose the one most convenient to
              you and click ‘select seats’.
            </li>
            <li>
              In the following page you will be able to glimpse the seating
              arrangement aboard the fleet, and choose your seats according to
              availability. Further to that select your boarding and drop off
              points from the drop-down and click ‘confirm seats’.
            </li>
            <li>
              In the next page you can review your booking and go on to enter
              the passenger details which includes your phone number, email id,
              passenger name, gender and age, and proceed to make the payment.
              On the right hand panel you are prompted the promo code of the
              on-going deals and offers.
            </li>
            <li>
              You can apply the promo code if required and go ahead and confirm
              your booking. Your e-ticket is further sent to your registered
              email id.
            </li>
          </p>

          <h3 className={classes.headingTopic}>Bus Cancellation Policy</h3>

          <p className={classes.details}>
            In case you have booked a bus and wish to cancel it, the
            cancellation charges apply. For any cancellations done between 0 to
            3 hours of bus departure time entitles you to no refund. For
            cancellations done between 3 to 12 hours of bus starting time too
            entitles you to no refund. For cancellations done between 12 to 24
            hours of bus departure time, you can claim 50% of the amount paid.
            For cancellations done between 24 to 72 hours of bus departure time,
            you can claim a 70% refund. For cancellations done between 72 to 168
            hours ahead of bus departure, you can claim an 80% refund and for
            all cancellations done 168 hours ahead of bus start time entitles
            you to a 90% refund.
          </p>

          <h3 className={classes.headingTopic}>Smart Filters</h3>

          <p className={classes.details}>
            You can now conduct a more thorough and effective search for buses
            on Yatra with the help of its really savy filters. The moment you
            zero in on a route, to do a search you are offered elaborate filters
            to fine tune your search so that you land more specific results. You
            can select a bus type whether AC seater, non-AC seater, AC sleeper,
            non-AC sleeper, AC semi-sleeper, non AC semi-sleeper. Further, you
            can pick a suitable departure and arrival time by selecting whether
            you prefer an early or late arrival/departure. You can then go on to
            select your boarding and drop off points and finally select your
            preferred bus operators. By applying filters you get a more refined
            search, and it ultimately helps you zero in on your chosen bus
            better.
          </p>

          <h3 className={classes.headingTopic}>Bus Routes Online</h3>

          <p className={classes.details}>
            Yatra has a rich network of bus routes connecting every major city
            with their tier 2 and 3 neighbours and also providing wider
            connectivity between two big destinations such as Mumbai to Goa,
            Bangalore to Goa or Delhi to Jaipur and Chennai to Trichy. You also
            have a great bus connectivity from the capital to popular hill
            stations like Nainital, Mussoorie, Manali among others. You can
            enter your starting destination, then your onward destination and
            conduct a search to check the connectivity on that route and the
            number of buses available for your dates. And no better way to get
            information on the various bus routes than by browsing them online.
          </p> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* style={{ marginTop: `${cardHeight ? "50px" : "auto"}` }} */}
        <Button
          size="small"
          color="primary"
          // onClick={() => setCardHeight(!cardHeight)}
        >
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import Navbar from "../Components/Navbar";
import { Buses } from "../Styles/BussesLandingPageStyle";
import { Box, Container, makeStyles } from "@material-ui/core";
import SearchCard from "../Components/Buses/SearchCard";
import CountriesOpen from "../Components/Buses/CountriesOpen";

const useStyles = makeStyles({
  pageDetails: {
    position: "absolute",
    margin: "0 0 0 525px",
    width: "39vw",
  },
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Buses>
        <Container>
          <Box className="landing">
            <Box style={{ position: "fixed" }}>
              <SearchCard />
            </Box>
            <Box className={classes.pageDetails}>
              <div className="currentNews">
                <img
                  src="https://www.yatra.com/ythomepagecms/media/banner/2021/Jun/50572d900d1e844a320d897c415b3646.jpg"
                  alt="Claim Refund"
                />
              </div>
              <div className="currentNews coupon-and-guide">
                <img
                  src="https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/f27d70d6f90d34f34b00fba5091fe02c.jpg"
                  alt="Coupon"
                />
                <img
                  src="https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/acf1eb1215d411ca0ee3e4ad7f57dd8c.jpg"
                  alt="Bus Guide"
                />
              </div>
              <div className="countiesOpen">
                <CountriesOpen />
              </div>
              <div className="busDiscount"></div>
              <div className="currentNews">
                <img
                  src="https://www.yatra.com/ythomepagecms/media/commonimage/2021/Mar/6270e0e50aa8a00ecd058f6cd0116f35.jpg"
                  alt="Claim Refund"
                />
              </div>
            </Box>
          </Box>
        </Container>
      </Buses>
    </div>
  );
}

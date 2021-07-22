import React from "react";
import Navbar from "../Components/Navbar";
import { Buses } from "../Styles/BussesLandingPageStyle";
import { Box, Container } from "@material-ui/core";
import SearchCard from "../Components/Buses/SearchCard";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Buses>
        <Container>
          <Box>
            <SearchCard />
          </Box>
          <Box>
            <div>
              <img src="" alt="" />
            </div>
          </Box>
        </Container>
      </Buses>
    </div>
  );
}

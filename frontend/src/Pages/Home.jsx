import { Box } from "@material-ui/core";
import React from "react";
import CountriesOpen from "../Components/Buses/CountriesOpen";
import DiscountCard from "../Components/Buses/DiscountCard";
import SearchCard from "../Components/Buses/SearchCard";
import WhyYatra from "../Components/Buses/WhyYatra";
import Navbar from "../Components/Navbar";
import { Buses } from "../Styles/Home";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Buses>
        <div className="leftSide">
          <SearchCard />
        </div>
        <div className="rightSide">
          <div className="currentNews">
            <img
              width="100%"
              src="https://www.yatra.com/ythomepagecms/media/banner/2021/Jun/50572d900d1e844a320d897c415b3646.jpg"
              alt="Claim Refund"
            />
          </div>
          <div className="currentNews coupon-and-guide">
            <img
              width="50%"
              src="https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/f27d70d6f90d34f34b00fba5091fe02c.jpg"
              alt="Coupon"
            />
            <img
              width="50%"
              src="https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/acf1eb1215d411ca0ee3e4ad7f57dd8c.jpg"
              alt="Bus Guide"
            />
          </div>
          <div className="countiesOpen">
            <CountriesOpen />
          </div>
          <div className="busDiscount">
            <DiscountCard />
          </div>
          <div className="currentNews">
            <img
              width="100%"
              src="https://www.yatra.com/ythomepagecms/media/commonimage/2021/Mar/6270e0e50aa8a00ecd058f6cd0116f35.jpg"
              alt="Claim Refund"
            />
          </div>
          <div>
            <WhyYatra />
          </div>
        </div>
      </Buses>
    </>
  );
}

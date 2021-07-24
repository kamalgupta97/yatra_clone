import React from "react";
import CountryCard from "./CountryCard";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 340, itemsToShow: 2, itemsToScroll: 2 },
  { width: 510, itemsToShow: 3 },
  { width: 680, itemsToShow: 4 },
];

export default function CountriesOpen() {
  const countryData = [
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1494332990/Fussen.jpg",
      name: "Germany",
    },
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1540884477/Magnum/Jungfrau/Jungfrau_1_MzbNCr.jpg",
      name: "Switzerland",
    },
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1526362206/Red_Square_in_Moscow_1526362077.jpg",
      name: "Russia",
    },
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1540383502/Magnum/Maldives/Maldives4_VAJ4Wk.jpg",
      name: "Maldives",
    },
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1493629503/Belgrade.jpg",
      name: "Serbia",
    },
    {
      img: "https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1473839081/Tashkent_Weather.jpg",
      name: "Uzbekistan",
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <p className="card-heading">Countries Open for Travel</p>
        <p className="view-all-cardTop">
          <a href="#">VIEW ALL</a>
        </p>
      </div>
      <div style={{ position: "relative", margin: "25px auto" }}>
        <Carousel breakPoints={breakPoints}>
          {countryData.map((item, id) => (
            <CountryCard key={id} country={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

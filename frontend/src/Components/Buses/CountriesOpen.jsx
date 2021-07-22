import React from "react";
import CountryCard from "./CountryCard";

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
    <div>
      {countryData.map((item, id) => (
        <CountryCard key={id} country={item} />
      ))}
    </div>
  );
}

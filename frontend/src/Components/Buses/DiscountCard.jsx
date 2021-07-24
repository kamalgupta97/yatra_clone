import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 800, itemsToShow: 4 },
];

export default function DiscountCard() {
  const cardData = [
    {
      img: "https://www.yatra.com/ythomepagecms/media/todayspick_bus/2020/Dec/9e6653d2fc554bd2c1c117bc5019539a.jpg",
    },
    {
      img: "https://www.yatra.com/ythomepagecms/media/todayspick_bus/2020/Dec/92080bfc72fd37d985aec4a1a20baa7f.png",
    },
    {
      img: "https://www.yatra.com/ythomepagecms/media/todayspick_bus/2020/Jul/349956484b1119790a09105260b929a9.png",
    },
    {
      img: "https://www.yatra.com/ythomepagecms/media/todayspick_bus/2020/Oct/b7c6244b1eaded8cf60471161d12e71b.png",
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <p>Bus Discount For You</p>
        <p>VIEW ALL</p>
        <div></div>
      </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          {cardData.map((item, id) => (
            <img src={item.img} alt="" key={id} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

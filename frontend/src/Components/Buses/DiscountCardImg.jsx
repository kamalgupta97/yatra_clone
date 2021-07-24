import React from "react";

export default function DiscountCardImg({ item, id }) {
  return (
    <div className="discountCard-img">
      <img src={item.img} alt="" key={id} />
    </div>
  );
}

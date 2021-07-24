import React from "react";
import { FooterStyle } from "../Styles/Footer";

export default function Footer() {
  const social = [
    {
      img: "https://symbols.getvecta.com/stencil_80/5_facebook-icon.8061cebdb8.jpg",
      url: "https://www.facebook.com/Yatra",
    },
    {
      img: "https://i.pinimg.com/474x/ee/4b/ec/ee4bec98e284c251b885707a470ad3b8.jpg",
      url: "https://twitter.com/YatraOfficial",
    },
    {
      img: "https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane.png",
      url: "https://www.youtube.com/user/yatratravel",
    },
    {
      img: "https://www.designpieces.com/wp-content/uploads/2016/05/Instagram-v051916-150x150.png",
      alt: "insta",
      url: "https://www.instagram.com/yatradotcom/",
    },
  ];
  return (
    <FooterStyle>
      <div className="footerTop">
        <div className="left"></div>
        <div className="mid">
          {social.map((item, ind) => (
            <img
              onClick={() => {
                window.open(item.url);
              }}
              key={ind}
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              src={item.img}
              alt={item.alt}
            />
          ))}
        </div>
        <div className="right"></div>
      </div>
      <div className="footerBottom">
        <p className="copyright">
          Copyright © 2021 Yatra Online Private Limited, India. All rights
          reserved
        </p>
      </div>
    </FooterStyle>
  );
}

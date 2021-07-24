import React from "react";
import { FooterStyle } from "../Styles/Footer";

export default function Footer() {
  const social = [
    {
      img: "https://symbols.getvecta.com/stencil_80/5_facebook-icon.8061cebdb8.jpg",
      url: "https://www.facebook.com/Yatra",
    },
    {
      img: "https://www.iconninja.com/files/125/255/644/twitter-tweet-social-logo-icon.svg",
      url: "https://twitter.com/YatraOfficial",
    },
    {
      img: "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png",
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
        <div className="left">
          <img src="/images/footerLeft.png" alt="" />
        </div>

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

        <div className="right">
          <img src="/images/footerRight.png" alt="" />
        </div>
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

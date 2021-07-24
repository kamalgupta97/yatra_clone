import styled from "styled-components";
import React from "react";

const CountryCards = styled.div`
  .card {
    width: 160px;
    border-radius: 5px;
    height: auto;
  }
  .card:hover {
    transform: scale(1.05);
    transition-duration: 1s;
    box-shadow: 0px 0.5px 3px 1px #e7e7e7;
  }
`;

export default function CountryCard({ country }) {
  return (
    <CountryCards>
      <div className="card">
        <div style={{ position: "relative" }}>
          <img style={{ borderRadius: "5px" }} src={country.img} alt="" />
          {/* <button
            style={{
              outline: "none",
              border: "none",
              background: "#49C973",
              color: "#ffffff",
              padding: "5px 10px",
              borderRadius: 7,
              //margin: "-300 0 0 0",
            }}
          >
            Open
          </button> */}
        </div>
        <p style={{ margin: "5px" }}>{country.name}</p>
      </div>
    </CountryCards>
  );
}

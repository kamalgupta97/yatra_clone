import React from "react";
import { useHistory } from "react-router-dom";
import { ProfileCard } from "../Styles/Myprofile";

export default function Myprofile() {
  const history = useHistory();
  return (
    <ProfileCard
      style={{
        height: "230px",
        width: "220px",
        boxShadow: "0px 1px 3px 1px grey",
      }}
    >
      <div
        className="profile"
        style={{
          height: "150px",
          width: "220px",
          boxShadow: "0px 1px 3px 1px grey",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: 0.6,
            alignItems: "center",
          }}
        >
          <div>
            <img
              width="70px"
              height="70px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9U5qIBmZvaj4NMFHetyxzCX5H6MBneRabSK-k_Xhfan5l0fH3KQedCJ-kGzROXcmcLrs&usqp=CAU"
              alt="profilePic"
            />
          </div>
          <div>
            <ul style={{ lineHeight: "28px" }}>
              <li style={{ fontSize: "14px" }}>My Bookings</li>
              <li style={{ fontSize: "14px" }}>My Refund</li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              color: "#ffffff",
              border: "none",
              outline: "none",
              borderRadius: "2px",
              width: "70px",
              height: "30px",
              background: "#cc0000",
              cursor: "pointer",
            }}
            onClick={() => history.push("/signin")}
          >
            Login
          </button>
          <button
            onClick={() => history.push("/signin")}
            style={{
              color: "#cc0000",
              border: "1px solid #cc0000",
              outline: "none",
              borderRadius: "2px",
              width: "70px",
              height: "30px",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div
        className="extra"
        style={{ height: "80px", display: "flex", alignItems: "center" }}
      >
        <ul style={{ lineHeight: "28px" }}>
          <li
            style={{
              fontSize: "14px",
              color: "#333333",
              marginLeft: "-10px",
              cursor: "pointer",

              "&:hover": {
                marginLeft: "10px",
              },
            }}
          >
            Yatra for Business
          </li>
          <li
            style={{
              fontSize: "14px",
              color: "#333333",
              marginLeft: "-10px",
              cursor: "pointer",

              "&:hover": {
                marginLeft: "10px",
                fontSize: "20px",
              },
            }}
          >
            Yatra for Travel Agents
          </li>
        </ul>
      </div>
    </ProfileCard>
  );
}

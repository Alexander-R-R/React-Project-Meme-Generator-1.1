import React from "react";
import HeaderImg from "../images/troll-face1.png";

export default function Header() {
  return (
    <div className="header-container">
      <span className="h1-container">
        <img className="header-img" src={HeaderImg} />
        <h1 className="header-main">Meme Generator</h1>
      </span>

      <h5 className="header-sub">React Course - Project 3</h5>
      
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/i2.jpg";
import "../styles/Home.css";
import '../styles/About.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Food Corner </h1>
        <p>FOOD AT A CLICK</p>
        <Link to="/menu">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

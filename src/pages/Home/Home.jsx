import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_titile from "../../assets/hero_title.png";
import play_icon from "../../assets/Play_icon.png";
import info_icon from "../../assets/Info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img"></img>
        <div className="hero-caption">
          <img src={hero_titile} className="caption-img"></img>
          <p>
            The Predator is a 2018 American science fiction action film directed
            by Shane Black, who co-wrote the script with Fred Dekker. It is the
            fourth installment in the Predator franchise, but counting the Alien
            vs. Predator
          </p>
          <div className="hero-btns">
          <button className="btn"> <img src={play_icon} className=""></img>Play</button>
          <button className="btn dark-btn"> <img src={info_icon} className=""></img>More Info </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

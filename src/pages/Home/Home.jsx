import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner3.jpg";
import hero_titile from "../../assets/hero_title.png";
import play from "../../assets/play.png";
import info from "../../assets/info2.jpg";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

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
            <button className="btn">
              {" "}
              <img 
              src={play} className="play_img"
              >
              </img>Play
            </button>
            <button className="btn dark-btn">
              {" "}
              <img 
              src={info} 
              className="info-img"></img>More Info{" "}
            </button>
          </div>

          <TitleCards />
        </div>
      </div>
      <div className="more-cards"> 
        <TitleCards name={"Only on Neflix"}  category={'TopRated'}/>
        <TitleCards name={"Upcoming Movies"} category={'Popular'}/>
        <TitleCards name={"Top Pics for you"} category={'UpComing'}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

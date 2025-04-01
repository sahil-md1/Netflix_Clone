import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = () => {
  const cardRefs = useRef();
  
  // const handleWhell = (event) => {
  //   event.preventDefault();
  //   cardRefs.current.scrollLeft += e.deltaY;
  // };

  // useEffect(() => {
  //   cardRefs.current.addEventListener('wheel' , handleWhell);
  // }, []);
  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardRefs}>
        {cards_data.map((data, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={data.image} alt=""></img>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

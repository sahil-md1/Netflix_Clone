import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ name, category }) => {
  const [movieData, setMovieData] = useState([]);
  // const [loadingState, setLoadingState] = useState([]);

  const cardRefs = useRef();

  // const url = `https://tvshow.p.rapidapi.com/Movie/${category? category: 'NowPlaying'}?Page=1&Language=en-US&Adult=true`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': 'fd39ff7006msh93cb556bcde6227p16e0b1jsn787ae99114a9',
  //     'x-rapidapi-host': 'tvshow.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (Array.isArray(result)) {
  //         setMovieData(result);
  //       }
  //     })
  //     .catch((error) => console.error(error, "Error fetchimf data:"));
  // }, []);

  // console.log(movieData, "type");

  return (
    <div className="title-cards">
      <h2> {name ? name : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRefs}>
        {/* {movieData.map((data, idx) => { */}
        {cards_data.map((data, idx) => {
          return (
            <Link to={`/Player/${data.id}`} className="card" key={idx}>
              <img src={data.image} alt={data.title}></img>
              <p>{data.originalTitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

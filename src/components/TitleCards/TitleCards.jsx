import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import spinner from "../../assets/spinner5.gif";

const TitleCards = ({ name, category }) => {
  const [movieData, setMovieData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  const cardRefs = useRef();

  const url = `https://tvshow.p.rapidapi.com/Movie/${category? category: 'NowPlaying'}?Page=1&Language=en-US&Adult=true`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'fd39ff7006msh93cb556bcde6227p16e0b1jsn787ae99114a9',
      'x-rapidapi-host': 'tvshow.p.rapidapi.com'
    }
  };

  // const url = `https://tvshow.p.rapidapi.com/Movie/${
  //   category ? category : "NowPlaying"
  // }?Page=1&Language=en-US&Adult=true`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "58d1990c26mshea4927b1ab7ed57p1afc7ajsn3ff192085637",
  //     "x-rapidapi-host": "tvshow.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    setLoadingState(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setMovieData(result);
        }
        setLoadingState(false);
      })
      // setLoadingState(false)
      .catch((error) => console.error(error, "Error fetchimf data:"));
  }, []);

  // console.log(movieData, "type");

  return (
    <div className="title-cards">
      <h2> {name ? name : "Popular on Netflix"}</h2>
      {loadingState ? (
        <div className="loading">Loading</div>
      ) : (
        <div className="card-list" ref={cardRefs}>
          {movieData.map((data, idx) => {
            {
              /* {cards_data.map((data, idx) => { */
            }
            return (
              <Link to={`/Player/${data.id}`} className="card" key={idx}>
                <LazyLoadImage
                  src={data.image}
                  alt={data.title}
                  effect="blur"
                />
                {/* <img src={data.image} alt={data.title}></img> */}
                <p>{data.originalTitle}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TitleCards;

import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    name: "",
    publishedAt: "",
    type: "",
    // url:''
  });
  const url = `https://tvshow.p.rapidapi.com/Video/${id}/Movie?Language=en-US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fd39ff7006msh93cb556bcde6227p16e0b1jsn787ae99114a9",
      "x-rapidapi-host": "tvshow.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          const movie = result[0]; // Get the first item from the API response
          const youtubeUrl = movie.url;

          // Extract YouTube video ID
          const videoId = youtubeUrl.split("v=")[1]?.split("&")[0] || "";

          setMovieData({
            ...movie,
            videoId: videoId, // Store extracted video ID
          });
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(movieData, "type");

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        onClick={() => {
          navigate(-2);
        }}
      ></img>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${movieData.videoId}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{movieData.name}</p>
        {/* <p>{movieData.publishedAt}</p> */}
        <p>{movieData.type}</p>
      </div>
    </div>
  );
};

export default Player;

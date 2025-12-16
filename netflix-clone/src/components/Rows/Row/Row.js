import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // 
  const handleClick = async (movie) => {
    try {
      // If trailer is already open → close it
      if (trailerUrl) {
        setTrailerUrl("");
        return;
      }

      // Search for the movie trailer
      const url = await movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      );

      // Extract the "v" YouTube video id from the URL
      const urlParams = new URLSearchParams(new URL(url).search);
      const videoId = urlParams.get("v");

      // Store video ID in state → this will show YouTube player
      setTrailerUrl(videoId);
    } catch (error) {
      console.log("Trailer not found:", error);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
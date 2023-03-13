import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const { state: id } = useLocation();
  const [movie, setMovie] = useState({});
  const [videoList, setVideoList] = useState([]);
  const {
    title,
    budget,
    genres,
    original_language,
    overview,
    poster_path,
    production_companies,
    release_date,
    revenue,
    vote_average,
    vote_count,
  } = movie;

  const imgURL = `https://image.tmdb.org/t/p/w1280`;
  const navigate = useNavigate();

  const getMovieDetails = async (id) => {
    const apiKey = process.env.REACT_APP_movieDB_api_key;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    try {
      const { data } = await axios(url);
      setMovie(data);
    } catch (error) {
      alert(error);
    }
  };

  const getMovieVideo = async (id) => {
    const apiKey = process.env.REACT_APP_movieDB_api_key;
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

    try {
      const { data } = await axios(url);
      setVideoList(data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMovieVideo(id);
    getMovieDetails(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-2">
      <h1 className="text-4xl">{title}</h1>
      <iframe
        width="950"
        height="535"
        src={`https://www.youtube.com/embed/${
          videoList[videoList.length - 1]?.key
        }`}
        title={`${videoList[videoList.length - 1]?.name}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
      <div className="flex justify-center items-start gap-2 m-5 ">
        <div>
          <img className="w-[800px]"
            src={`${imgURL}${poster_path}` || ""}
            alt="poster"
          />
        </div>
        <div className="text-lg flex items-start justify-start flex-col p-3 bg-color4 rounded">
          <h2 className="text-2xl">Overview</h2>
          <p className="min-h-[200px] " >{overview || ""}</p>

          <p>Original Language : {original_language?.toUpperCase()}</p>
          <p>Release Date : {release_date || ""}</p>
          <p>Rating : {vote_average?.toFixed(1) || ""}</p>
          <p>Votes Counted : {vote_count || ""}</p>
          <p>Budget : {budget || ""}</p>
          <p>Revenue : {revenue || ""}</p>
          <p className="flex gap-3">
            Production Companies :{" "}
            <ul >
              {production_companies?.map((item) => (
                <li>{item.name}</li>
                ))}
            </ul>
          </p>
          <p className="flex gap-3">
            Genres :
            <ul>
              {genres?.map((item) => (
                <li>{item.name}</li>
                ))}
            </ul>
          </p>
          <button className="px-3 py-1 bg-color1 rounded text-color2" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

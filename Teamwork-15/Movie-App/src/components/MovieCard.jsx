import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const imgURL = `https://image.tmdb.org/t/p/w1280`;
  const navigate = useNavigate();
  const { id, title, overview, poster_path, vote_average } = item;
  const [showOverview, setShowOverview] = useState(false);

  return (
    <div
      className="flex items-start justify-start flex-wrap hover:cursor-pointer relative w-[250px] h-[400px]"
      onClick={() => navigate(`/detail/${id}`, { state: id })}
      onMouseOver={()=>setShowOverview(true)}
      onMouseLeave={()=>setShowOverview(false)}
    >
      <img
        className=""
        src={poster_path && `${imgURL}${poster_path}`}
        alt={poster_path ? "poster" : "No poster found"}
      />

      <div className='flex justify-between items-center w-full h-[50px] bg-color3 text-color4 px-2'>
        <p className="">{title}</p>
        <p className="">{vote_average}</p>
      </div>
      {showOverview && (
        <div className=" bg-color4 bg-opacity-80 p-2  overflow-auto absolute bottom-[-25px] ">
          <p className="text-lg font-medium">Overview</p>
          <p>{overview}</p>
        </div>
      )}
      
    </div>
  );
};

export default MovieCard;



const Overview = () => {
  return (
    <div className=" bg-color4 bg-opacity-80 p-2  overflow-auto absolute bottom-[-25px] ">
    <p className="text-lg font-medium">Overview</p>
    <p>overview</p>
  </div>
  )
}

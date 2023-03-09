import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  
  
  return (
    <div className="notFound-container">
      <img
        className="object_astronaut"
        src="http://salehriaz.com/404Page/img/astronaut.svg"
        width="100px"
        alt="astronaut"
      />
      <h1>404</h1>
      <p>Looks like you are lost in the space!</p>
      {/* <button>Go Back</button> */}
    </div>
  );
};

export default NotFound;

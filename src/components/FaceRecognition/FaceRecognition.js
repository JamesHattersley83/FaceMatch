import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="container">
      <img
        alt=""
        className="mx-auto mt-3 mb-3 d-block shadow bg-white rounded"
        src={imageUrl}
        width="350px"
        height="auto"
      />
    </div>
  );
};

export default FaceRecognition;

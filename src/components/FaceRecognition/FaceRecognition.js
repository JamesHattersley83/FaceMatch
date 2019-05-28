import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="container">
      <div className="position-absolute mt-3 mb-3">
        <img
          id="inputImage"
          alt=""
          className="rounded mx-auto d-block"
          src={imageUrl}
          width="350px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;

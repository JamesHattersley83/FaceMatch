import React from "react";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="container">
      <h5 className="text-center mt-5">
        {"This App will detect faces in your photos. Give it a try!"}
      </h5>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter photo URL..."
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

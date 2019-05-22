import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="container">
      <h5 className="text-center mt-5">
        {"This App will detect faces in your photos. Give it a try!"}
      </h5>
      <div class="input-group mt-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter photo URL..."
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <p className="navbar-brand text-white">facematch</p>
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          type="button"
          onClick={() => onRouteChange("signout")}
        >
          Sign Out
        </button>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <p className="navbar-brand text-white">facematch</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="btn btn-outline-light mx-3"
            type="button"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </button>
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={() => onRouteChange("register")}
          >
            Register
          </button>
        </div>
      </nav>
    );
  }
};

export default Navigation;

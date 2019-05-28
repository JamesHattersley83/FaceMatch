import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <p className="navbar-brand text-white">facematch</p>
      <button
        className="btn btn-outline-light my-2 my-sm-0"
        type="button"
        onClick={() => onRouteChange("signIn")}
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navigation;

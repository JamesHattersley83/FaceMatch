import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm />

      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;

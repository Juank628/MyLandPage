import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import PhotoWithText from "./components/PhotoWithText/PhotoWithText";
import IconsArray from "./components/IconsArray/IconsArray";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Welcome />
        <IconsArray />
        <PhotoWithText />
      </main>
    </div>
  );
}

export default App;

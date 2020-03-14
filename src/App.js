import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./Components/Header/header.js";
import PhotoScroller from "./Components/PhotoScroller/photoscroller.js";





function App() {
  return (
    
    <div className="App">
      <Header/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun::: 🚀!
      </p>
      <PhotoScroller />
    </div>
  );
}

export default App;

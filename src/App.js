import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./Components/Header/header.js";
import PhotoScroller from "./Components/PhotoScroller/photoscroller.js";





function App() {
  return (
    
    <div className="App">
      <Header/>
      <PhotoScroller />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

import Header from "./Components/Header/header.js";



function AddPhoto() {
  const [APOD, setAPOD] = useState({});

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv&date=2020-01-01")
    .then((response) => {
      setAPOD(response.data);
    });
  },[]);

  return (
    <img src = {APOD.url} alt = {APOD.explanation} />
  );
}


function App() {
  return (
    
    <div className="App">
      <Header/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun::: 🚀!
      </p>
      <AddPhoto />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";




function AddPhoto() {
  const [APOD, setAPOD] = useState("");

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv")
    .then((response) => {
      setAPOD(response.data);
    });
  });

  return (
    <img src = {APOD.hdurl} alt = "today's picture from space" />
  );
}


function AddPhoto() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo />
    </div>
  );
}

export default App;

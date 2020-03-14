import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./photoscroller.css";


function AddPhoto(props) {
  const {APOD, setAPOD, year, month, day} = props;

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv&date=${year}-${month}-${day}`)
      .then((response) => {
        setAPOD(response.data);
      });
    },[]);
  
    return (
      <img src = {APOD.url} alt = {APOD.explanation} />
    );
  }



  function PhotoScroller () {
    const d = new Date();
    const [APOD, setAPOD] = useState({});
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
      
    return (
          <AddPhoto APOD = {APOD} setAPOD = {setAPOD} year = {year} month = {month} day = {day}/>
      );
  }

  export default PhotoScroller;






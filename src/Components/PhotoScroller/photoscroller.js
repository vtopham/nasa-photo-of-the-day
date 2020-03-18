import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "./datepicker"
import "./photoscroller.css";


function AddPhoto(props) { //This will insert the photo that is chosen into the scroller & update when APOD changes
  const {APOD, setAPOD, chosenDate, setChosenDate} = props;

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv&date=${chosenDate}`)
      .then((response) => {
        setAPOD(response.data);
        console.log(response);
      });
    },[chosenDate]);
  
    return (
        <div className = "image-container">
            <img src = {APOD.url} alt = {APOD.explanation} />
        </div>
    );
  }






function PhotoScroller () { //this containes the STATES for showing pictures!
const d = new Date(); //get today's date
let year = d.getFullYear(); //initialize today's date as year/month/day to pass as props
let month = d.getMonth() + 1; //lmfao
let day = d.getDate();

const [APOD, setAPOD] = useState({});
const [chosenDate, setChosenDate] = useState(`${year}-${month}-${day}`)
    
return (
    <div className = "photo-scroller">
        <AddPhoto APOD = {APOD} setAPOD = {setAPOD} chosenDate = {chosenDate} setChosenDate = {setChosenDate}/>
        
        <DatePicker chosenDate = {chosenDate} setChosenDate = {setChosenDate} year = {year} month = {month} day = {day}/>
    </div>
    );
}

export default PhotoScroller;






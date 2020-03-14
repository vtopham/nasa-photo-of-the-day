import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./photoscroller.css";


function AddPhoto(props) { //This will insert the photo that is chosen into the scroller & update when APOD changes
  const {APOD, setAPOD, chosenDate, setChosenDate} = props;

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv&date=${chosenDate}`)
      .then((response) => {
        setAPOD(response.data);
      });
    },[chosenDate]);
  
    return (
        <div className = "image-container">
            <img src = {APOD.url} alt = {APOD.explanation} />
        </div>
    );
  }


function DatePicker(props) {//this will insert buttons to pick a date to load a new photo!
const {chosenDate, setChosenDate, year, month, day} = props;

function setNewDate() {
    const newYear = document.getElementById("year").value;
    const newMonth = document.getElementById("month").value;
    const newDay = document.getElementById("day").value;

    setChosenDate(`${newYear}-${newMonth}-${newDay}`);
    console.log(chosenDate);
}

return (//returns the date chooser with today set as the default
    <div className = "date-holder"> 
        <label htmlFor="year">YYYY:</label> <input type="text" id="year" name="year" defaultValue = {year}></input>
        <label htmlFor="year">MM:</label> <input type="text" id="month" name="month" defaultValue = {month}></input>
        <label htmlFor="year">DD:</label> <input type="text" id="day" name="day" defaultValue = {day}></input>
        <button onClick = {setNewDate} >Submit</button>
    </div>
)
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






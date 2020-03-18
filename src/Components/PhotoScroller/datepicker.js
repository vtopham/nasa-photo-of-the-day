import React from "react";


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
        <div className = "date-picker">
            <p>Pick a date!</p>
            <div className = "date-holder"> 
                <label htmlFor="year">YYYY</label> <input type="text" id="year" name="year" defaultValue = {year}></input>
                <label htmlFor="year">MM</label> <input type="text" id="month" name="month" defaultValue = {month}></input>
                <label htmlFor="year">DD</label> <input type="text" id="day" name="day" defaultValue = {day}></input>
                <button onClick = {setNewDate} >Submit</button>
            </div>
        </div>
    )
    }

export default DatePicker;
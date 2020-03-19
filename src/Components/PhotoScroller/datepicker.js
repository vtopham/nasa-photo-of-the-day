import React from "react";
import styled from "styled-components"




const DateContainer = styled.div`
    margin-top: 4%;
    p {
        margin-bottom: 2%;
    }
`;

const DateSelection = styled.div`
    display: flex;
    font-size: 1rem;
    justify-content: center;

    * {
        margin: 0 10px;
    }

`;

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
        <DateContainer>
            <p>Pick a date!</p>
            <DateSelection> 
                <label htmlFor="year">YYYY</label> <input type="text" id="year" name="year" defaultValue = {year}></input>
                <label htmlFor="year">MM</label> <input type="text" id="month" name="month" defaultValue = {month}></input>
                <label htmlFor="year">DD</label> <input type="text" id="day" name="day" defaultValue = {day}></input>
                <button onClick = {setNewDate} >Submit</button>
                
            </DateSelection>
        </DateContainer>
    )
    }

export default DatePicker;
import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "./datepicker"
import "./photoscroller.css";
import styled from "styled-components"

// STYLE FOR THE ADDPHOTO COMPONENT

const ImageContainer = styled.div`
    margin: 0 auto;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PhotoTitle = styled.h2`
  padding: 2% 0;
  font-size: 24px;
`;

const DisplayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 40px;
`;

const ExplanationText = styled.p`

  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  margin: 4% 0;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;

`;

//COMPONENT
function AddPhoto(props) { //This will insert the photo that is chosen into the scroller & update when APOD changes
  const {APOD, setAPOD, chosenDate, setChosenDate} = props;

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=JzkrP8ReT0T7KHnBYhfFAkXgm624q5ndkE6Gg5uv&date=${chosenDate}`)
      .then((response) => {
        setAPOD(response.data);
        console.log(response);
      })
      .catch((response) => {
        alert("Please enter a valid date!");
      });
    },[chosenDate]);
  
    return (
        <ImageContainer>
            <PhotoTitle>{APOD.title}</PhotoTitle>
            <DisplayImage src = {APOD.url} />
            <ExplanationText>{APOD.explanation}</ExplanationText>
        </ImageContainer>
    );
  }


//COMPONENT STYLING FOR PHOTO SCROLLER
const PhotoDisplay = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PhotoCard = styled.div`
    padding: 0 4%;
    margin: 2%;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 10px lightgray;

`;

//THE COMPONENT
function PhotoScroller () { //this containes the STATES for showing pictures!
const d = new Date(); //get today's date
let year = d.getFullYear(); //initialize today's date as year/month/day to pass as props
let month = d.getMonth() + 1; //lmfao
let day = d.getDate();

const [APOD, setAPOD] = useState({});
const [chosenDate, setChosenDate] = useState(`${year}-${month}-${day}`)
    
return (
    <PhotoDisplay>
      

      <DatePicker chosenDate = {chosenDate} setChosenDate = {setChosenDate} year = {year} month = {month} day = {day}/>
      <PhotoCard>  
        <AddPhoto APOD = {APOD} setAPOD = {setAPOD} chosenDate = {chosenDate} setChosenDate = {setChosenDate}/>
      </PhotoCard>
    </PhotoDisplay>
    );
}

export default PhotoScroller;







import './App.css';
import React, {useState} from 'react'
import { render } from 'react-dom';
import Table from './Table';
import Search from './Search';
import { useEffect } from 'react';
import Pagination from './Pagination';
import About from './About';
import { unmountComponentAtNode } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes
} from 'react-router-dom';
import Logo from './Logo';

function Hoc() {

    const [originalListPlayers, setOriginalListPlayers] = useState(1);
    const [completeListPlayers, setCompleteListPlayers] = useState(1);
    const [listPlayers, setListPlayers] = useState([1]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalAmountOfPlayers, setTotalAmountOfPlayers] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    

    const resetAfterSearch = () =>{
      setListPlayers(originalListPlayers);
      setCurrentPage(1);
    }

    const populateCompleteList = () => {
        fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage="+totalAmountOfPlayers)
        .then(res => res.json())
        .then(
          (result) => {
            var temp = Object.entries(result)[0];
            setCompleteListPlayers(temp[1]);
              }
                ,
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        document.getElementById("loadAllPlayersText").innerHTML = "You are good to go. All players are loaded";
    }
    
    const populateData = () => {
        
        setCurrentPage(1);

        fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage=20")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result.pagination.numberOfDocuments);
            setTotalAmountOfPlayers(result.pagination.numberOfDocuments);
          var temp = Object.entries(result)[0];
          setListPlayers(temp[1]);
          setOriginalListPlayers(temp[1]);
          setIsLoaded(true);
            },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )


    };

    const updatePlayers = (pageNumber) =>{
    fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber="+pageNumber+"&documentsPerPage=20")
    .then(res => res.json())
    .then(
      (result) => {
        var temp2 = Object.entries(result)[0];
        setListPlayers(temp2[1]);
    }
            ,
      (error) => {
      }
    )

    
    }

    const searchFor = () => {
    let searchValue = document.getElementById("searchValue").value;
    console.log(searchValue);
    let filteredPlayers = [];
    console.log(completeListPlayers);
        for(let i=0; i<completeListPlayers.length; i++){

        if(completeListPlayers[i].nickname.includes(searchValue)){
            filteredPlayers.push(completeListPlayers[i]);
            console.log('pushed');
            console.log(filteredPlayers);
        }
    } 
    setListPlayers(filteredPlayers);
    }

    const nextPage = () => {
        if(currentPage!=(3000/20)){
            setCurrentPage(currentPage+1);
            updatePlayers(currentPage+1);
    }}

    const previousPage = () => {
        if(currentPage!=1){
            setCurrentPage(currentPage-1);
            updatePlayers(currentPage-1);
    }}

   useEffect(() => {
    setCurrentPage(1);

        fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage=20")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result.pagination.numberOfDocuments);
            setTotalAmountOfPlayers(result.pagination.numberOfDocuments);
          var temp = Object.entries(result)[0];
          setListPlayers(temp[1]);
          setOriginalListPlayers(temp[1]);
            }
              ,
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage="+totalAmountOfPlayers)
        .then(res => res.json())
        .then(
          (result) => {
            var temp = Object.entries(result)[0];
            setCompleteListPlayers(temp[1]);
              }
                ,
          (error) => {
            setIsLoaded(true);
          setError(error);
          }
        )

  }, [])





  return (

    <div>
      <ul className="navigationlinks">
        <button id="aboutUs" className="btn-secondary">
          <Link to="/about">About Us</Link>
        </button>
        <button id="Home" className="btn-secondary home-btn">
          <Link to="/">Home</Link>
        </button>
      </ul>
      <h4 className="explanatoryInfo">Welcome to the First Person Shooter game. Here you can check stats of the other players<h4/>
      </h4>
      <h4 id ="loadAllPlayersText" className="explanatoryInfo">Before doing anything, click on the "Load all players" button to have the list of all players.
        Do this before searching.
      </h4>
 
      <Routes>
        <Route exact path='/about' element={<About/>}>
        </Route>
      </Routes>
  
<Logo/>
    <div id="mainSection">
    {/* <button onClick={printListPlayers}>Print player list</button> */}
      <button onClick={resetAfterSearch} className="vieworiginallist btn-secondary">View original player list</button>
      <button onClick={populateCompleteList} className="loadallplayers btn-secondary">Load all players</button>
      <Search searchFor={searchFor}/>
      <Table players={listPlayers} title="People table" />
      <p>Clicking on the previous or next button will always show you the previous and next page of the original list of players</p>
      <Pagination nextPage = {nextPage} previousPage = {previousPage}/>
    </div>
    
  </div>

    );
}

export default Hoc;
  



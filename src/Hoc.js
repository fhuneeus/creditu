
import './App.css';
import React, {useState} from 'react'
import { render } from 'react-dom';
import Table from './Table';
import Search from './Search';
import { useEffect } from 'react';
import Pagination from './Pagination';
import About from './About';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ReactBootstrap from 'react-bootstrap';
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
    const [searchResultsNum, setSearchResultsNum] = useState(0);
    

    const resetAfterSearch = () =>{
      if(originalListPlayers.length!=null){
      setListPlayers(originalListPlayers);
      setCurrentPage(1);
      setSearchResultsNum(0);
      }
    }

    const populateCompleteList = (totalAmountPlayers) => {
        fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage="+totalAmountPlayers)
          .then(res => res.json())
          .then(
            (result) => {
              var temp = Object.entries(result)[0];
              setCompleteListPlayers(temp[1]);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
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
      },
        (error) => {
        }
      )
    }

    const searchFor = () => {
    let searchValue = document.getElementById("searchValue").value;
    if(searchValue!=''){
    let filteredPlayers = [];
    for(let i=0; i<completeListPlayers.length; i++){
      if(completeListPlayers[i].nickname.includes(searchValue)){
          filteredPlayers.push(completeListPlayers[i]);
        }
    }
    setSearchResultsNum(filteredPlayers.length); 
    setListPlayers(filteredPlayers);
    }
  }

    const nextPage = () => {
        if(currentPage!=(3000/20)){
            setCurrentPage(currentPage+1);
            updatePlayers(currentPage+1);
    }
  }

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
          var temp = Object.entries(result)[0];
          setListPlayers(temp[1]);
          setOriginalListPlayers(temp[1]);
          populateCompleteList(result.pagination.numberOfDocuments);
          },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      // fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage="+totalAmountOfPlayers)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       var temp = Object.entries(result)[0];
      //       setCompleteListPlayers(temp[1]);
      //         },
      //     (error) => {
      //       setIsLoaded(true);
      //       setError(error);
      //     }
      //   )

  }, [])


  return (

    <div>
      <div className="navigationlinks">
      <Logo/>
          <Link to="/about">About Us</Link>
          <Link to="/">Home</Link>
       
      </div>
      <h4 className="explanatoryInfo">Welcome to the First Person Shooter game.<br/>Here you can check stats of the other players<h4/>
      </h4>
      <Routes>
        <Route exact path='/about' element={<About/>}>
        </Route>
      </Routes>

    <div id="mainSection">
      <Button onClick={resetAfterSearch} className="vieworiginallist btn-secondary only-desktop">View all players</Button>
      {/* <button onClick={populateCompleteList} className="loadallplayers btn-secondary">Load all players</button> */}
      <Search searchFor={searchFor}/>
      <Button onClick={resetAfterSearch} className="vieworiginallist btn-secondary only-mobile">View all players</Button>

      <p className="searchResultsNum">Showing {searchResultsNum} search results </p>
      <Table players={listPlayers} title="People table" />
      <p className="footerText">Clicking on the previous or next button will always show you the previous and next page of the original list of players</p>
      <Pagination nextPage = {nextPage} previousPage = {previousPage} pgnumber={currentPage}/>
    </div>  
  </div>
    );
}

export default Hoc;
  



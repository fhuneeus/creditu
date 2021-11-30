import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import { withRouter } from 'react-router' 


function About(props) {

  return (
  
  <div id="aboutSection">
    <p>This is the platform to see all of the players of the game. Here you can navigate and see all of the players and search by name.<br/>To go back to the main section click on the "Home" button</p>
  </div>
  );
}

export default About;

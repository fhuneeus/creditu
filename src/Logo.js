import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import logo from "../src/logo.png"

function Logo(props) {

  return (
    <img src={logo} className="gameLogo"/>
  )
}

export default Logo;

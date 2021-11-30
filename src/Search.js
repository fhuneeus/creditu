import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';

function Search(props) {


  return (
    
    <div className="searchBar">
      <input id="searchValue"></input>
      <button onClick={props.searchFor} id="searchBtn">Search</button>
    </div>
    )

}

export default Search;

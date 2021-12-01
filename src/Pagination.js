import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';

function Pagination(props) {

  return (
  <div className="row pagination">
    <button id="prevButton" onClick={props.previousPage}>PREVIOUS</button>
    <button id="nextButton" onClick={props.nextPage}>NEXT</button>
  </div>
  )
}

export default Pagination;

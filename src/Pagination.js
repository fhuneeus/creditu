import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';

function Pagination(props) {

  return (
  
  <><div className="row pgnumber">
      <h3 class="visualPageNumber">Page number {props.pgnumber}</h3>
    </div><div className="row pagination">
        <button id="prevButton" onClick={props.previousPage}><a>PREVIOUS</a></button>
        <button id="nextButton" onClick={props.nextPage}>NEXT</button>
      </div></>
  )
}

export default Pagination;

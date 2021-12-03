import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import BoostrapTable from 'react-bootstrap/Table';

function Table(props) {

  return (
    

  <div>
  <table id="dataTable" className="table-striped table-dark">
    <thead>
      <tr>
        <th>AVATAR</th>
        <th>ID</th>
        <th>NICKNAME</th>
        <th>BALANCE</th>
      </tr>
    </thead>
    <tbody>
      {props.players.map((player) => (
        <tr>
          <td id="avatar"><img src={"https://"+player.avatar}/></td>
          <td id="id">{player.id}</td>
          <td id="nickname">{player.nickname}</td>
          <td id="balance">{player.balance}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
}

export default Table;

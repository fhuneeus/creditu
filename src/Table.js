import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';

function Table(props) {

  return (
    

  <><table id="dataTable">
  
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

    </table><ul>

      </ul></>



  );

}

export default Table;

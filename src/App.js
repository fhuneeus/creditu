import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes
} from 'react-router-dom';
import Hoc from './Hoc';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  
  
  const[playersArray, setPlayersArray] = useState([]);
  const[filteredData, setFilteredData] = useState([]);
  
  // useEffect(() => {
  //   fetch("https://creditu-players-assessment-api.herokuapp.com/players?pageNumber=1&documentsPerPage=20")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         var temp = Object.entries(result)[0];
  //         setPlayersArray(temp[1]);
  //         console.log(temp[1]);
  //           }
  //             ,
  //       (error) => {
  //       }
  //     )
  // });

  const handleSearch = (event) => {

  }
  
  return (
            <div className="App">
              <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange={(event) =>handleSearch(event)} />
        <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>Nickname</th>
            <th>Status</th>
            <th>Balance</th>
            <th>Avatar</th>
          </tr>
          </thead>
          {playersArray.map((player) => (
            <tr>
              <td>{player.id}</td>
              <td>{player.nickname}</td>
              <td>{player.status}</td>
              <td>{player.balance}</td>
              <td><img src={player.avatar}/></td>
            </tr>
            ))}
        </table>

        <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a className="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a> */}
            </header>
            <body>
              <Hoc/>
            </body>
            
          </div>
  );
}

export default App;

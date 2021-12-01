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
    
  return (
          <div className="App">
            <header>
            </header>
              <body>
                <Hoc/>
              </body> 
          </div>
        );
}

export default App;

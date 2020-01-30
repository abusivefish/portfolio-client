import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './views/portfolio.js'


function App() {
//  var mainWindow = 
var navbar = Header()
  
  return (
    <div className="App">
    
    <nav>{navbar}</nav>

      <div className="main-window">
        
      </div>

      <footer className="footer">
        
      </footer>
    </div>
  );
};

function Header() {
  return (
    <header className="navbar">
        <a href="https://github.com/abusivefish" target="_blank">
        <img 
            className="GH" 
            alt="" 
            src="./GitHub-Mark-32px.png" 
            id="gh-ref"
            />
        </a>
      </header>
  );
}

function router() {
  var props = [1, 2, 3];
  var first = props[0];

  return (
    <ul className="dropdown">
        <li>props.children</li>
    </ul>
  );
} 


export default App;

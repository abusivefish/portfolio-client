import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavDropdown {
  
}

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <a href="https://github.com/abusivefish">
        <img 
            className="GH" 
            alt="" 
            src="./GitHub-Mark-32px.png" 
            id="gh-ref"
        />
        </a>
          
          <ul className="dropdown">
            
          </ul>
      
      </header>
    
      <div className="main-window">
        <div className="">
          
        </div>
      </div>

      <footer className="footer">
        
      </footer>
    </div>
  );
}

/* function selectNav() {
  var options=""
  for (var i = 0; i <= 7; i++) {
    options += "<option>" + i + "</option>";  
  }
  return options
}

function InvertColor() {
  do thing
}


Old Brick 	#912133 	Primary
Baltic Sea 	#232127 	Info
Dingley 	#618447 	Success
Christine 	#de740f 	Warning
Pomegranate 	#f44336 	Danger


*/


export default App;

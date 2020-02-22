import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export default function Header() {
    return (
        <header className="navbar">
            
        </header>
    );
  }
  
  function social_modal() {
    let socials = {
        "GH": "https://github.com/abusivefish",
        "LI": "https://linkedin.com/in/connor-law"
    };
    
    return( 
        <a href="https://github.com/abusivefish" target="_blank" rel="noopener noreferrer">
        <img 
            className="socials" 
            alt="" 
            src="./GitHub-Mark-32px.png" 
            id="gh-ref"
            />
        </a>
    );
  }

  function router() {
    var props = [1, 2, 3];
    
    return (
      <div className="dropdown">
          <option>{}</option>
      </div>
    );
  } 
  


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

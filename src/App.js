import React from "react";

import './App.css';
import Feed from "./utils/feed";
import Post from "./utils/Post";
//import { useState, useEffect } from "react";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
        /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
    //   </header>
    // </div>
    <div className="app">
          
      <Post/>
          
        </div>
  );
}

export default App;

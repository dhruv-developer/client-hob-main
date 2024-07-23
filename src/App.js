import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Feed from "./utils/feed";
import Post from "./utils/Post";
import TweetBox from "./utils/TweetBox";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TweetBox />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

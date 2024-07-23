import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import { address } from './config'; // Ensure this path is correct
import { ethers } from 'ethers';
import Blog from './Blog.json';

function Feed({ personal }) {
  const [posts, setPosts] = useState([]);

  const getUpdatedTweets = (allTweets, address) => {
    return allTweets.map(tweet => ({
      id: tweet.id,
      tweetText: tweet.tweetText,
      isDeleted: tweet.isDeleted,
      username: tweet.username,
      personal: tweet.username.toLowerCase() === address.toLowerCase(),
    }));
  };

  const getAllTweets = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const Blog2 = new ethers.Contract(address, Blog.abi, signer);

        const allTweets = await Blog2.getAllTweets();
        setPosts(getUpdatedTweets(allTweets, await signer.getAddress()));
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTweets();
  }, []);

  const deleteTweet = (key) => async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const Blog2 = new ethers.Contract(address, Blog.abi, signer);

        await Blog2.deleteTweet(key, true);
        const allTweets = await Blog2.getAllTweets();
        setPosts(getUpdatedTweets(allTweets, await signer.getAddress()));
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* <TweetBox /> */}

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.username}
            text={post.tweetText}
            personal={post.personal}
            onClick={deleteTweet(post.id)}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

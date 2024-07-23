import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Button } from "@material-ui/core";
import { address } from './config.js';
import { ethers } from 'ethers';
import Blog from './Blog.json';
import './TweetBox.css';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const addTweet = async () => {
    let tweet = {
      tweetText: tweetMessage,
      isDeleted: false
    };

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const Blog2 = new ethers.Contract(
          address,
          Blog.abi,
          signer
        );

        let twitterTx = await Blog2.addTweet(tweet.tweetText, tweet.isDeleted);

        console.log(twitterTx);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log("Error submitting new Tweet", error);
    }
  };

  const sendTweet = (e) => {
    e.preventDefault();

    addTweet();

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://example.com/your-avatar.jpg" // replace with your fixed avatar URL
            alt="Avatar"
            style={{ width: '100px', height: '100px' }}
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

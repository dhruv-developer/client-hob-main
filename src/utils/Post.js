import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from 'avataaars';
// import { generateRandomAvatarOptions } from './avatar';
//import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Publish from '@mui/icons-material/Publish';
import Delete from '@mui/icons-material/Delete';

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            // {...generateRandomAvatarOptions() }
          /> 
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
            {personal ? (
              <Delete fontSize="small" onClick={onClick}/>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
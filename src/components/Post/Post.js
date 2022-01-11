import React from "react";

import "./Post.css";

const Post = ({ post, index }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{post.title}</h1>
      <img className="image" src={post.poster} alt="post" />
      <p>{post.storyline}</p>
      <div className="info">
        <h5>Post: {index + 1}</h5>
        <h4>Written by: {post.creators}</h4>
      </div>
    </div>
  );
};

export default Post;

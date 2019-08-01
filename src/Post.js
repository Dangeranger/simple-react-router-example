import React from "react";

const Post = props => {
  return (
    <div>
      <h1>This is the page for the post:</h1>
      <h2>{props.post.split("-").join(" ")}</h2>
    </div>
  );
};

export default Post;

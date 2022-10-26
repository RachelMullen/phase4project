import React from "react";
import CommentForm from "./CommentForm";

export default function Comment() {
  return (
    <>
      <div>
        <h1>COMMENTS FOR SPECIFIC WOOF</h1>
        <CommentForm />
        <div>
          <h3>Display and map through comments here</h3>
          <p>comment</p>
          <p>user_id</p>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import  { useHistory } from 'react-router-dom'


export default function CommentForm( onAddComment, woof_id ) {

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      comment: comment,
      woof_id: woof_id,
    };
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((comment) => {
          setComment("");
          setErrors([]);
          onAddComment(comment);
        });
        // history.push('/home')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

return (
  <form onSubmit={handleSubmit}>
    <div>
    <label>Comment: </label>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
        </div>
      {errors.map((err) => (
        <p key={err} style={{ color: "red" }}>
          {err}
        </p>
      ))}
    <input type="submit" value="Submit Comment!" />
  </form>
  /* {errors
    // ? errors.map((e) => (
        <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
      ))
    : null} */
);
}

import React, { useState } from "react";
import { useHistory } from "react-router";

export default function CommentForm({ addComment }) {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, ongoing: true }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(addComment);
      } else {
        //Display errors
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  return (
    <>
      <div>
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <form onSubmit={onSubmit}>
          <label>Comment </label>
          <p>
            <input
              type="text"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </p>
          <input type="submit" value="Submit Comment!" />
        </form>
        {errors
          ? errors.map((e) => (
              <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
            ))
          : null}
      </div>
    </>
  );
}

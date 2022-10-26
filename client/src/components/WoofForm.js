import React, { useState } from "react";
import { useHistory } from "react-router";

export default function WoofForm({ addWoof }) {
  const [formData, setFormData] = useState({
    woof_content: "",
    image_url: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function onSubmit(e) {
    e.preventDefault();

    fetch("/woofs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, ongoing: true }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(addWoof);
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
          <label>Woof! </label>
          <p>
            <input
              type="text"
              name="woof"
              value={formData.woof_content}
              onChange={handleChange}
            />
          </p>
          <label>Image</label>
          <p>
            <input
              type="text"
              name="image"
              value={formData.image_url}
              onChange={handleChange}
            />
          </p>
          <input type="submit" value="Send Woof!" />
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

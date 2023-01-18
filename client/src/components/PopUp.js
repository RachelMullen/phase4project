import React, { useState } from "react";
import "../css/PopUp.css";
// import { useParams } from 'react-router-dom';

function PopUp({ userWoof, setPopUp, updateWoof, setIsOpen }) {
  const [woofContent, setWoofContent] = useState(userWoof.woof_content);
  const [imageUrl, setImageUrl] = useState(userWoof.image_url);

  // const PopUp = props => {
  // function that takes boolean as param to conditionally display popup
  // const { setPopUp } = props

  // const { id } = useParams()

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    // setIsLoading(true);
    fetch(`/woof/${userWoof.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        woof_content: woofContent,
        image_url: imageUrl,
      }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((userData) => updateWoof(userData));
        setPopUp(false);
      }
      //   } else {
      //     r.json().then((err) => setErrors(err.errors));
      //   }
    });
  }

  return (
    <div className="PopUp">
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
      <div className="pu-content-container">
        <div>
          <form onSubmit={handleSubmit}>
            <p>
              <label>Woof!</label>
              <input
                type="text"
                name="woof"
                value={woofContent}
                placeholder={userWoof.woof_content}
                onChange={(e) => setWoofContent(e.target.value)}
              />
            </p>
            <p>
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={imageUrl}
                placeholder={userWoof.image_url}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </p>
            <input type="submit" value="Woof!" />
          </form>
          {/* {errors */}
          {/* ? errors.map((e) => ( */}
          {/* <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2> */}
          {/* )) */}
          {/* : null} */}
        </div>
      </div>
    </div>
  );
}
export default PopUp;

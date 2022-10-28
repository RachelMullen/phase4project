import React, { useState } from "react";

export default function WoofForm({ onAddWoof }) {

  const [woofContent, setWoofContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  // const [errors, setErrors] = useState([]);
  function handleSubmit(e){
    let woof = {
      "woof_content" : woofContent,
      "image_url" : imageUrl,
    }
    e.preventDefault();
    setWoofContent("");
    setImageUrl("");
    console.log(woof.woof_content)
    fetch('/woofs',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(woof)
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => onAddWoof(data))
      // } else {
        //Display errors
        // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }


  return (
    <>
      <div>
        {/* {errors ? errors.map((e) => <div>{e}</div>) : null} */}
        <form onSubmit={handleSubmit}>
          <p>
            <label>Woof!</label>
              <input
                type="text"
                name="woof"
                value={woofContent}
                onChange={(e) => setWoofContent(e.target.value)}
              />
          </p>
          <p>
            <label>Image</label>
              <input
                type="text"
                name="image"
                value={imageUrl}
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
    </>
  );
}
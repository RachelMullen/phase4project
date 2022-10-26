<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import WoofList from "../components/WoofList";

export default function Home() {
  const [woofs, setWoofs] = useState([]);


  useEffect(() => {
    fetch("/home").then((response) => {
      if (response.ok) {
        response.json().then((woofs) => console.log(woofs));
      }
    })
  }, []);
=======
import React from "react";
import WoofList from "./WoofList";
import WoofForm from "./WoofForm";
>>>>>>> erica

  return (
    <>
      This is the home page
<<<<<<< HEAD
=======
      <WoofForm woofs={woofs} />
>>>>>>> erica
      <WoofList woofs={woofs} />
    </>
  );
}

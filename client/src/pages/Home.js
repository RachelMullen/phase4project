import React, { useState, useEffect } from "react";
import WoofList from "../components/WoofList";

export default function Home() {
  const [woofs, setWoofs] = useState([]);
  const [errors, setErrors] = useState(false);


  useEffect(() => {
    fetch("/home").then((response) => {
      if (response.ok) {
        response.json().then((woofs) => setWoofs(woofs));
      }
    });
  }, []);

  return (
    <>
      {woofs  ?
      (<WoofList woofs={woofs} />) 
     : null} 
    </>
  );
}

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

  return (
    <>
      This is the home page
      <WoofList woofs={woofs} />
    </>
  );
}

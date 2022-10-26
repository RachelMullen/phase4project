<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"; 
import WoofList from "../components/WoofList";

export default function Home() {
  const [woofs, setWoofs] = useState([]);
  const [errors, setErrors] = useState(false);

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    fetch("/home").then((response) => {
      if (response.ok) {
        response.json().then((woofs) => setWoofs(woofs));
      }
    });
  }, []);

  function handleDelete() {
    //DELETE to `/woofs/${params.id}`
    fetch(`/woofs/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        // deleteWoof(params.id);
        history.push("/");
      } else {
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
      {woofs  ?
      (<WoofList woofs={woofs} handleDelete={handleDelete}/>) 
     : null} 
=======
import React from "react";
// import WoofList from "./WoofList";
// import WoofForm from "./WoofForm";

export default function Home() {
  return (
    <>
      This is the home page
      {/* <WoofForm woofs={woofs} />
      <WoofList woofs={woofs} /> */}
>>>>>>> 5bc978c0ee7bbf0b94db23fdae83e56f6dbb7bcd
    </>
  );
}

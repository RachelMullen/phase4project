import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar'
import WoofFeed from '../components/WoofFeed'

export default function Profile( {user}) {
  
  useEffect(() => {
    fetch(`/me`)
    .then((r) => r.json())
    .then((user) => console.log(user));
      }, []);


      console.log(user)
  return (
    <>
      <div>
        <NavBar />
        <h1>{user.name}</h1>
        <h2>@{user.username}</h2>
        <h2>Joined {user.created_at}</h2>
        {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override? */}
        <p>
          Display and Edit: Name, Username, Email, Password, Breed, Photo, Bio
        </p>
        <button>Edit</button>
        <button>Submit</button>
        <button>Delete</button>
        <p> Should we display all of the users Woofs here as a stretch goal?</p>
        {/* <WoofFeed feed={feed} /> */}
      </div>
    </>
  );
}

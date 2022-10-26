import React, { useEffect } from "react";
import NavBar from '../components/NavBar'
import { useHistory } from "react-router-dom";
import WoofForm from "../components/WoofForm"

export default function Profile( {user}) {

  const history = useHistory();

  
  useEffect(() => {
    fetch(`/me`)
    .then((r) => r.json())
    .then((user) => console.log(user));
      }, []);

      const settingsPage = () => history.push('settings/profile')

  return (
    <>
      <div>
        <NavBar />
        <h1>{user.name}</h1>
        <h2>@{user.username}</h2>
        <h2>Joined {user.created_at}</h2>
        <img alt="profile_picture" src={user.image_url} />
        <button onClick ={settingsPage} >Edit Profile</button>
         {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override? */}
<<<<<<< HEAD
=======
        
>>>>>>> 5bc978c0ee7bbf0b94db23fdae83e56f6dbb7bcd
        {/* <p> Should we display all of the users Woofs here as a stretch goal?</p> */}
        <WoofForm />
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WoofForm from "../components/WoofForm"
import UserWoofs from "../components/UserWoofs" 

export default function Profile( {user} ) {
  const [displayedWoofs, setDisplayedWoofs] = useState([])

  const history = useHistory();


    console.log(displayedWoofs)
  
    const displayedWoofsCollection = displayedWoofs.map((displayedWoof) => {
      return (
        <UserWoofs key = {displayedWoof.id} userWoof = {displayedWoof}/>
      )
    })

    useEffect(() => {
      fetch(`/profile/${user.id}`)
      .then((r) => r.json())
      .then((displayedWoofs) => setDisplayedWoofs(displayedWoofs));
        }, []);

      const settingsPage = () => history.push('settings/profile')

  return (
    <>
      <div>
        <img alt="profile_picture" src={user.image_url} />
        <h1>{user.name}</h1>
        <h2>@{user.username}</h2>
        <h2>Joined {user.created_at}</h2>
        <button onClick ={settingsPage} >Edit Profile</button>
         {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override? */}
        {/* <p> Should we display all of the users Woofs here as a stretch goal?</p> */}
        <WoofForm />
        <ul className="user_woofs">
          {displayedWoofsCollection}
        </ul>
      </div>
    </>
  );
}

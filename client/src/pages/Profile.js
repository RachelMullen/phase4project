import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WoofForm from "../components/WoofForm"
import UserWoofs from "../components/UserWoofs" 

export default function Profile( {user, deleteWoof, displayedWoof } ) {
  const [displayedWoofs, setDisplayedWoofs] = useState([])
  const history = useHistory();


    console.log(displayedWoofs)
  
    const displayedWoofsCollection = displayedWoofs.map((displayedWoof) => {
      return (
        <UserWoofs key = {displayedWoof.id} userWoof = {displayedWoof} deleteWoof = {deleteWoof}/>
      )
    })

    const updateWoof = (updatedWoof) => setDisplayedWoofs(current => {
      return current.map(woof => {
           if(woof.id === updatedWoof.id){
             return updatedWoof
           } else {
             return woof
           }
          })
        })

    function handleAddWoof (newWoof) {
      const newWoofArray = [...displayedWoofs, newWoof]
      setDisplayedWoofs(newWoofArray);
    }

    function handleDelete(){
      //DELETE to `/productions/${params.id}`
      // fetch("/profile",{
      //     method:'DELETE',
      //     headers: {'Content-Type': 'application/json'}
      // })
      // .then(res => {
      //     if(res.ok){
      //       deleteWoof(woof.id)
      //       history.push('/')
      //     }
          // } else {
          //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          // }
      }

      const settingsPage = () => history.push('settings/')

  return (
    <>
      <div>
        <img alt="profile_picture" src={user.image_url} />
        <h1>{user.name}</h1>
        <h2>@{user.username}</h2>
        <h2>Joined {user.created_at}</h2>
        <button onClick ={settingsPage} >Edit Profile</button>
         Does this need to be a form? Should the form be separate? Will this redirect to signup and then override? */}
        {/* {/* {/* <p> Should we display all of the users Woofs here as a stretch goal?</p> */}
        <WoofForm onAddWoof={handleAddWoof}/>
        <ul className="user_woofs">
          {displayedWoofsCollection}
        </ul>
      </div>
    </>
  );
}


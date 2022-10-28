import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WoofForm from "../components/WoofForm";
import UserWoofs from "../components/UserWoofs";

export default function Profile({ user, deleteWoof }) {
  const [displayedWoofs, setDisplayedWoofs] = useState([]);
  //controls if popup displays
  const [popUp, setPopUp] = useState(false);

  // adds class to darken background color
  const duringPopUp = popUp ? " during-popup" : "";

  const history = useHistory();

  console.log(displayedWoofs);

  useEffect(() => {
    fetch(`/users/$(user.id)`)
      .then((r) => r.json())
      .then((data) => setDisplayedWoofs(data.woofs));
  }, []);

  const updateWoof = (updatedWoof) =>
    setDisplayedWoofs((current) => {
      return current.map((woof) => {
        if (woof.id === updatedWoof.id) {
          return updatedWoof;
        } else {
          return woof;
        }
      });
    });

  const displayedWoofsCollection = displayedWoofs.map((displayedWoof) => {
    return (
      <UserWoofs
        key={displayedWoof.id}
        userWoof={displayedWoof}
        handleDelete={handleDelete}
        duringPopUp={duringPopUp}
        updateWoof={updateWoof}
      />
    );
  });

  function handleAddWoof(newWoof) {
    const newWoofArray = [...displayedWoofs, newWoof];
    setDisplayedWoofs(newWoofArray);
  }

  function handleDelete(id) {
    //DELETE to `/woofs/${params.id}`
    fetch(`/woofs/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        deleteWoof(id);
        history.push("/");
        // } else {
        //   res
        //     .json()
        //     .then((data) =>
        //       setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
        //     );
        // }
      }
    });
  }

  const settingsPage = () => history.push("profile/settings/");

  return (
    <>
      <div>
        <img alt="profile_picture" src={user.image_url} />
        <h1>{user.name}</h1>
        <h2>@{user.username}</h2>
        <h2>Joined {user.created_at}</h2>
        <button onClick={settingsPage}>Edit Profile</button>
        {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override?  */}
        {/* {/* {/* <p> Should we display all of the users Woofs here as a stretch goal?</p> */}
        <WoofForm onAddWoof={handleAddWoof} />
        <ul className="user_woofs">{displayedWoofsCollection}</ul>
      </div>
    </>
  );
}

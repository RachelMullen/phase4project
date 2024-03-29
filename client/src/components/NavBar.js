import React from "react";
import { Link } from "react-router-dom";
import Woof1 from "../assets/Woof1.png";

export default function NavBar({ user, setUser, updateUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(false);
      }
    });
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar_header">
          <Link to="/">
            <img className="twitter_logo" alt="WoofLogo" src={Woof1} />
          </Link>
          <h1 className="navbar_name"> Woofer </h1>
        </div>
        <div className="navbar_links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

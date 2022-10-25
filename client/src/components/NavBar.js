import React from "react";
import { Link } from "react-router-dom";
import twitterLogo from '../assets/twitterLogo.png'

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <div className="navbar">
        <img alt="twitterLogo" src={twitterLogo} />
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

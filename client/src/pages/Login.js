import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUp from "../pages/SignUp";

import twitterLogo from "../assets/twitterLogo.png";
import twitterLoginGraphic from "../assets/twitterLoginGraphic.jpeg";

export default function Login({ onLogin, updateUser }) {
  const [showLogin, setShowLogin] = useState(true);

  // const popup = document.getElementById("myPopup");
  // popup.classList.toggle("show");

  return (
    <>
      <div className="login">
        <img
          className="twitter_login_image"
          alt="twitter_login_image"
          src={twitterLoginGraphic}
        />
        <div className="login_content">
          <img className="twitter_logo" alt="twitter_logo" src={twitterLogo} />
          <h1 className="login_header">Happening now</h1>
          <h2 className="login">Join Twitter today.</h2>
          <div className="popup">
            {/* <button onclick={handleClick}>Sign up with phone or email</button> */}
            <span className="popuptext" id="myPopup">
            </span>
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
          </div>
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <p>
                Don't have an account? &nbsp;
                <button onClick={() => setShowLogin(false)}>Sign Up</button>
              </p>
            </>
          ) : (
            <>
              <SignUp onLogin={onLogin} />
              <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowLogin(true)}>Log In</button>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

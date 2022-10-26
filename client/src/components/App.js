import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import About from "../pages/About";
import Settings from "../pages/Settings"

export default function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const deleteAccount = (id) => setAccounts(current => current.filter(p => p.id !== id)) 


  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/logout">
            <Login />
          </Route>
          <Route exact path="/settings/profile">
            <Settings user={user} deleteAccount = {deleteAccount} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

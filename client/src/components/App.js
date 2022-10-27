import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import About from "../pages/About";
import Settings from "../pages/Settings"
import {useParams} from 'react-router-dom'
import WoofSettings from "../pages/WoofSettings"


export default function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [woofs, setWoofs] = useState([]);
  const [displayedWoofs, setDisplayedWoofs] = useState([]);]

  // const [woof, setWoof] = useState([]);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/profile/${user.id}`)
    .then((r) => r.json())
    .then((displayedWoofs) => setDisplayedWoofs(displayedWoofs));
      }, []);



  const deleteAccount = (id) => setAccounts(current => current.filter(p => p.id !== id)) 
  const deleteWoof = (id) => setWoofs(woofs => woofs.filter(woof => woof.id !== id))


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
            <Profile user={user} deleteWoof = {deleteWoof} displayedWoofs = {displayedWoofs}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/logout">
            <Login />
          </Route>
          <Route exact path="/profile/settings">
            <Settings user={user} deleteAccount = {deleteAccount} />
          </Route>
          <Route exact path="/woof/settings">
            <WoofSettings />
          </Route>
        </Switch>
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import About from "../pages/About";
import Settings from "../pages/Settings"
import WoofSettings from "../pages/WoofSettings"

export default function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [woofs, setWoofs] = useState([]);

  // const [woof, setWoof] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  const deleteAccount = (id) => setAccounts(current => current.filter(p => p.id !== id)) 
  const deleteWoof = (id) => setWoofs(woofs => woofs.filter(woof => woof.id !== id))
  function updateUser() {
    setUser({
      ...user,
          username: user.username,
          email: user.email,
          password: user.password,
          password_confirmation: user.passwordConfirmation,
          name: user.name,
          breed: user.breed,
          bio: user.bio,
          image_url: user.image_url,
    })
  }
  
  // const addWoof = (woof) => setWoofs(current => [...current,woof])


  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} deleteWoof = {deleteWoof} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/logout">
            <Login />
          </Route>
          <Route exact path="/profile/settings">
            <Settings user={user} deleteAccount = {deleteAccount} updateUser = {updateUser}/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
    </>
  );
}

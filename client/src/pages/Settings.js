import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Settings ( {user, deleteAccount} ) {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [passwordConfirmation, setPasswordConfirmation] = useState(user.password_confirmation);
  const [name, setName] = useState(user.name);
  const [breed, setBreed] = useState(user.breed);
  const [image_url, setImage_Url] = useState(user.image_url);
  const [bio, setBio] = useState(user.bio);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
//   const [userData, setUserData] = useState({})

const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/profile/settings", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          name: name,
          breed: breed,
          bio: bio,
          image_url: image_url,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((userData) => console.log(userData));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })};

      function handleDelete(){
        //DELETE to `/productions/${params.id}`
        fetch("/profile/settings",{
          method:'DELETE',
          headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
          if(res.ok){
            deleteAccount(user.id)
            history.push('/')
          } else {
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
    }

    //   function missingPassword (password) {
    //     if (password == "") 
    //         return "Error: Must enter password"
      

return (
<>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label>Password Confirmation</label>
        </p>
        <p>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </p>
        <p>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Breed</label>
          <input
            type="text"
            id="breed"
            value={breed}
            placeholder={user.breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </p>
        <p>
          <label>Profile Image</label>
          <input
            type="text"
            id="image_url"
            value={image_url}
            placeholder={user.image_url}
            onChange={(e) => setImage_Url(e.target.value)}
          />
        </p>
        <p>
          <label>Bio</label>
          <input
            type="text"
            id="bio"
            value={bio}
            placeholder={user.bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <button type="submit">{isLoading ? "Loading..." : "Update Account"}</button>
        <button type="button" onClick={handleDelete}>Delete Account</button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </>
  );
}

export default Settings;
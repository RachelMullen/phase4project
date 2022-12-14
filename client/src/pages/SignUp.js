import React, { useState } from "react";

export default function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        name,
        breed,
        image_url,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
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
            autoComplete="current-password"
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
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Breed</label>
          <input
            type="text"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </p>
        <p>
          <label>Profile Image</label>
          <input
            type="text"
            id="image_url"
            value={image_url}
            onChange={(e) => setImage_Url(e.target.value)}
          />
        </p>
        <p>
          <label>Bio</label>
          <input
            type="text"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </div>
  );
}

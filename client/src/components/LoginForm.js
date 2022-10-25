import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    let user = {
      "username" : username,
      "password" : password
    }
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
    <>
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
          <label>Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </>
  );
}

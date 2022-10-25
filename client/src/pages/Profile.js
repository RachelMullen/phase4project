import React from "react";

export default function Profile() {
  return (
    <>
      <div>
        <h1>Profile</h1>
        {/* Does this need to be a form? Should the form be separate? Will this redirect to signup and then override? */}
        <p>
          Display and Edit: Name, Username, Email, Password, Breed, Photo, Bio
        </p>
        <button>Edit</button>
        <button>Submit</button>
        <button>Delete</button>
        <p> Should we display all of the users Woofs here as a stretch goal?</p>
      </div>
    </>
  );
}

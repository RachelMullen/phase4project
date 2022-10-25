import React from "react";
import WoofList from "./WoofList";
import WoofForm from "./WoofForm";

export default function WoofFeed({ woofs }) {
  return (
    <>
      <div>
        <WoofForm woofs={woofs} />
        <WoofList woofs={woofs} />
      </div>
    </>
  );
}

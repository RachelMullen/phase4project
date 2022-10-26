import React from "react";
import WoofCard from "./WoofList";
import WoofForm from "./WoofForm";

export default function WoofList({ woofs }) {
  return (
    <>
      <div>
        <WoofForm woofs={woofs} />
        <WoofCard woofs={woofs} />
      </div>
    </>
  );
}

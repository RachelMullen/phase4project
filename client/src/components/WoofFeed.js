import React from "react";
import WoofCard from "./WoofCard";
import WoofForm from "./WoofForm";

export default function WoofFeed({ woofs }) {
  return (
    <>
      <div>
        {/* Have this populate a new woof that appears on page */}
        <WoofForm woofs={woofs} />
        {/* Map through all of the Woofs */}
        <WoofCard woofs={woofs} />
      </div>
    </>
  );
}

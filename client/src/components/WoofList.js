import React from "react";
import WoofCard from "./WoofCard";

export default function WoofList({ woofs }) {
  return (
    <>
      <div>
        <WoofCard woofs={woofs} />
      </div>
    </>
  );
}

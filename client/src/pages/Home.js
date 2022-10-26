import React from "react";
import WoofList from "./WoofList";
import WoofForm from "./WoofForm";

export default function Home({woofs}) {
  return (
    <>
      This is the home page
      <WoofForm woofs={woofs} />
      <WoofList woofs={woofs} />
    </>
  );
}

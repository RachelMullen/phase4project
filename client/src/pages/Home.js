import React from "react";
import WoofFeed from "../components/WoofFeed";

export default function Home({woofs}) {
  return (
    <>
      This is the home page
      <WoofFeed woofs={woofs} />
    </>
  );
}

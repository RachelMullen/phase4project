import React from "react";
import WoofCard from "./WoofCard";

function WoofList( {woofs} ) {

  console.log(woofs)

  const woofsCollection = woofs.map((woof) => {
    return (
      <WoofCard key = {woof.id} woof = {woof} />
    )
  })

  return (
    <ul className="woofs">
      {woofsCollection}
    </ul>
  );
}

export default WoofList;

import React from "react";
import WoofCard from "./WoofList";
import WoofForm from "./WoofForm";

function WoofList( {woofs}, {handleDelete} ) {

  console.log(woofs)

  const woofsCollection = woofs.map((woof) => {
    return (
      <WoofCard key = {woof.id} woof = {woof} handleDelete = {handleDelete}/>
    )
  })

  return (
<<<<<<< HEAD
    <ul className="woofs">
      {woofsCollection}
    </ul>
=======
    <>
      <div>
        <WoofForm woofs={woofs} />
        <WoofCard woofs={woofs} />
      </div>
    </>
>>>>>>> 5bc978c0ee7bbf0b94db23fdae83e56f6dbb7bcd
  );
}

export default WoofList;
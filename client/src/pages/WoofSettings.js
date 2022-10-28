// import React, { useState } from "react";
// import { useParams } from 'react-router-dom';

// function WoofsSettings ( {displayedWoof } ) {
//     const [woofContent, setWoofContent] = useState(displayedWoof.woof_content)
//     const [imageUrl, setImageUrl] = useState(displayedWoof.image_url)

//     const { id } = useParams()
    
//     function handleSubmit(e) {
//             e.preventDefault();
//             // setErrors([]);
//             // setIsLoading(true);
//             fetch(`/woof/${displayedWoof.id}/settings`, {
//                 method: "PATCH",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                   woof_content: woofContent,
//                   image_url: imageUrl,
//                 }),
//               }).then((r) => {
//                 // setIsLoading(false);
//                 if (r.ok) {
//                     r.json().then((userData) => console.log(userData));
//                 }
//                 //   } else {
//                 //     r.json().then((err) => setErrors(err.errors));
//                 //   }
//                 })};

//     return (
//         <>
//         <div>
//           {/* {errors ? errors.map((e) => <div>{e}</div>) : null} */}
//           <form onSubmit={handleSubmit}>
//             <p>
//               <label>Woof!</label>
//                 <input
//                   type="text"
//                   name="woof"
//                   value={woofContent}
//                   placeholder={displayedWoof.woof_content}
//                   onChange={(e) => setWoofContent(e.target.value)}
//                 />
//             </p>
//             <p>
//               <label>Image</label>
//                 <input
//                   type="text"
//                   name="image"
//                   value={imageUrl}
//                   placeholder={displayedWoof.image_url}
//                   onChange={(e) => setImageUrl(e.target.value)}
//                 />
//             </p>
//             <input type="submit" value="Woof!" />
//           </form>
//           {/* {errors */}
//             {/* ? errors.map((e) => ( */}
//                 {/* <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2> */}
//               {/* )) */}
//             {/* : null} */}
//         </div>
//       </>
//     );
//     }
// export default WoofsSettings;
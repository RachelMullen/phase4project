// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

export default function WoofCard({ woof }) {
  const [comments, setComments] = useState([])
  // const params = useParams();
  // const [errors, setErrors] = useState(false);

  // const deleteComment = (id) => setComments(current => current.filter(p => p.id !== id)) 

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setComments);
  }, []);

  const commentsCollection = woof.comments.map((comment) => {
    return <CommentCard key={comment.id} comment={comment} />;
  });

  if (!woof) return <h1>Loading</h1>;
  // if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <div>
        <hr />
        <p>{woof.woof_content}</p>
        <p>
          <img src={woof.image_url} alt={woof.woof_content} />
        </p>
      </div>
    
      <div>  
      <p>
      <h1>Comments</h1>
        {commentsCollection}
      </p>
      </div>
      </>
  );
}
//Erica's Code for this
// return (
//   <>
//     <div>
//       <p>{woof.woof_content}</p>
//       <p>
//         <img src={woof.image_url} alt={woof.woof_content} />
//       </p>
//     </div>
//     <p>
//       This is where we will come up with something that tracks the number of
//       likes
//     </p>
//     <CommentCard />
//     </>
// );
// }
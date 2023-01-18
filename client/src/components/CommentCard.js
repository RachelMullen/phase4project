// import { Link, useParams, useHistory } from "react-router-dom";
// import { React} from "react";

// export default function CommentCard({ comment, woof_id } ) {
//   const [comments, setComments] = useState({});
//   // const [errors, setErrors] = useState(false);
//   // const params = useParams();
//   const history = useHistory();


//   useEffect(() => {
//     fetch("/comments")
//       .then((r) => r.json())
//       .then(setComments);
//   }, []);

//   function handleAddComment(newComment) {
//     setComments((comments) => [...comments, newComment]);
//   }

//   return (
//     <>
//       <div>
//           {comment.comment}
//         </div> 
//     </>
//   );
// }

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm";

export default function CommentCard({ comment, deleteComment }) {
  // const [comment, setComment] = useState({});
  const [errors, setErrors] = useState(false);
  // const params = useParams();
  // const history = useHistory();

  // useEffect(() => {
  //   //GET to '/comments/:id'
  //   fetch(`/comments/${params.id}`).then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         setComment(data);
  //         setLoading(false);
  //       });
  //     } else {
  //       console.log("error");
  //       res.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // }, []);

  // function handleDelete() {
  //   //DELETE to `/comments/${params.id}`
  //   fetch(`/productions/${params.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((res) => {
  //     if (res.ok) {
  //       deleteComment(id);
  //       history.push("/");
  //     } else {
  //       res
  //         .json()
  //         .then((data) =>
  //           setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //         );
  //     }
  //   });
  // }

  if (!comment) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <div>
        {comment.comment}
        {/* <Link to={`/comments/${params.id}/edit`}>Edit Comment</Link> */}
        {/* <button onClick={handleDelete}>Delete Comment</button> */}
        {/* <CommentForm /> */}
      </div>
    </>
  );
}

import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function WoofCard(deleteWoof) {
  const [woof, setWoof] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    //GET to '/woof/:id'
    fetch(`/woofs/${params.id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setWoof(data);
          setLoading(false);
        });
      } else {
        console.log("error");
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  function handleDelete() {
    //DELETE to `/woofs/${params.id}`
    fetch(`/woofs/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        deleteWoof(params.id);
        history.push("/");
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  const { woof_content, image_url } = woof;

  return (
    <>
      <div>
        <p>{woof_content}</p>
        <p>
          <img src={image_url} alt={woof_content} />
        </p>
      </div>
      <button>
        <Link to={`/woofs/${params.id}/edit`}>Edit Woof</Link>
      </button>
      <button onClick={handleDelete}>Delete Woof</button>
      <p>
        This is where we will come up with something that tracks the number of
        likes
      </p>
      <CommentCard />
    </>
  );
}

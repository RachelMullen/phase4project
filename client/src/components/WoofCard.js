import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import CommentCard from "./CommentCard";

export default function WoofCard({handleDelete}, {woof}) {
  // const [woof, setWoof] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();

  console.log(woof)

  // const { woof_content, image_url } = woof;


  // useEffect(() => {
  //   //GET to '/woof/:id'
  //   fetch(`/woofs/${params.id}`).then((res) => {
  //     if (res.ok) {
  //       res.json().then((data) => {
  //         setWoof(data);
  //         setLoading(false);
  //       });
  //     } else {
  //       console.log("error");
  //       res.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // }, []);


  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <div>
        <p>{woof.woof_content}</p>
        <p>
          <img src={woof.image_url} alt={woof.woof_content} />
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

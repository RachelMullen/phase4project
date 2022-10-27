import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import CommentCard from "./CommentCard";

export default function WoofCard({ woof}) {
  const [errors, setErrors] = useState(false);

  const params = useParams();

  if (!woof) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <div>
        <p>{woof.woof_content}</p>
        <p>
          <img src={woof.image_url} alt={woof.woof_content} />
        </p>
      </div>
      <CommentCard />
      </>
  );
}

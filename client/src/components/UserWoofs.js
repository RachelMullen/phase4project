import { useState } from "react";

export default function UserWoofs({userWoof}) {
  const [errors, setErrors] = useState(false);

//   const params = useParams();

//   if (!woof) return <h1>Loading</h1>;
//   if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <div>
        <p>{userWoof.woof_content}</p>
        <p>
          <img src={userWoof.image_url} alt={userWoof.woof_content} />
        </p>
      </div>
      {/* <button>
        <Link to={`/woofs/${params.id}/edit`}>Edit Woof</Link>
      </button> */}
      {/* <button onClick={handleDelete}>Delete Woof</button> */}
      </>
  );
}

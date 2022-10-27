import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CommentCard from './CommentCard'


export default function UserWoofs({userWoof, deleteWoof}) {
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const params = useParams();

  const woofsSettingsPage = () => history.push('/woof/settings')

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
      <button onClick = {woofsSettingsPage}>Edit Woof</button>
      <button onClick = {deleteWoof}>Delete Woof</button>
      <p>
        This is where we will come up with something that tracks the number of
        likes
      </p>
      <CommentCard />
      </>
  );
}

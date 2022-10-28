import { Link, useParams, useHistory } from "react-router-dom";
import { React} from "react";

export default function CommentCard({ comment }) {
  // const [comments, setComments] = useState({});
  // const [errors, setErrors] = useState(false);
  // const params = useParams();
  // const history = useHistory();

  return (
    <>
      <div>
          {comment.comment}
        </div> 
    </>
  );
}

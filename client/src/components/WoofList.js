import React from "react";
import WoofCard from "./WoofCard";
import WoofForm from "../components/WoofForm";
// import { useHistory, useParams } from "react-router-dom";
// import CommentCard from "../components/WoofForm";

export default function WoofList({ woofs }) {
  // const [comments, setComments] = useState([]);

  // const history = useHistory();
  // const params = useParams();

//   useEffect(() => {
//     fetch("/comments").then((response) => {
//       if (response.ok) 
//         response.json().then((comments) => setComments(comments));
//       }
// );
// }, []);
  const woofsCollection = woofs.map((woof) => {
    return <WoofCard key={woof.id} woof={woof} />;
  });

  return (
    <ul className="woofs">
      <WoofForm />
      {woofsCollection}
      {/* {comments ? comments={comments} : null} */}
    </ul>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CommentCard from './CommentCard'
// import '../css/UserWoof.css;'


export default function UserWoofs({userWoof, handleDelete}) {
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const params = useParams();

  const woofsSettingsPage = () => history.push('/woof/settings')

    // function useEventListener(click, handler, element = window){
    //     const savedHandler = useRef();

    //     useEffect(() => {
    //         savedHandler.current = handler;
    //       }, [handler]);

    //     useEffect(
    //         () => {
    //             const isSupported = element && element.addEventListener;
    //             if (!isSupported) return;

    //             const eventListener = event => savedHandler.current(event);
    //             element.addEventListener(click, eventListener);
                
    //             return () => {
    //                 element.removeEventListener(click, eventListener);
    //               };
    //             },
    //             [click, element]

    //             );
    //         };


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
      <button onClick = {() => handleDelete(userWoof.id)}>Delete Woof</button>
      <p>
        This is where we will come up with something that tracks the number of
        likes
      </p>
      <CommentCard />
      </>
  );
  }

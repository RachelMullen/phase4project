import { useState } from "react";
import CommentCard from './CommentCard'
import PopUp from './PopUp';
import '../css/UserWoofs.css'


export default function UserWoofs({userWoof, handleDelete, duringPopUp, updateWoof}) {
//   const [errors, setErrors] = useState(false);
const [popUp, setPopUp] = useState(false)
const [isOpen, setIsOpen] = useState(false);



//   if (!woof) return <h1>Loading</h1>;
//   if (errors) return <h1>{errors}</h1>;
  return (
    <>
    <div className={"Woof" + duringPopUp}>
        <p>{userWoof.woof_content}</p>
        <p>
          <img src={userWoof.image_url} alt={userWoof.woof_content} />
        </p>
      </div>
        <button onClick={()=> setPopUp(true)} className={duringPopUp}>Edit Woof</button>
      <button onClick = {() => handleDelete(userWoof.id)}>Delete Woof</button>    
        <CommentCard className={"Comment" + duringPopUp}/>
        <div>
            {popUp && <PopUp userWoof={userWoof} setPopUp={setPopUp} updateWoof={updateWoof} setIsOpen={setIsOpen} open={isOpen}/>}
        </div>
      </>
  );
  }

import React, {useState} from 'react';
// styling
import './Checkout.css';
// components
import PopUp from './PopUp';










const Checkout = () => {
    // controls if popup displays
    const [popUp, setPopUp] = useState(false)
    // adds class to darken background color
    const duringPopUp = popUp ? " during-popup" : ""
    
    return (
        <div className={"edit_woof" + duringPopUp}>
            <div className="nav"> 
                <h1>Cart</h1> 
            </div>
        <div className={"cart" + duringPopUp}>            
            <table >
                <tr className={duringPopUp}>
                    <th className={duringPopUp}>Item</th>
                    <th className={duringPopUp}>Quantity</th>
                    <th className={duringPopUp}>Price</th>
                </tr>
               



               
                    <td></td>
                    <td className="total"> $24.00</td>
                </tr>
            </table>
            <button onClick={()=>setPopUp(true)} className={duringPopUp}>Checkout!</button>
        </div>
            {popUp && <PopUp setPopUp={setPopUp}/>}
        </div>
    );
}

export default Checkout;
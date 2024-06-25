import {forwardRef ,useImperativeHandle,useRef} from "react";
import { createPortal } from "react-dom";
 const ResultModal=forwardRef(function  ResultModal({targetTime, timeRemaining,onReset} ,ref){
    const dialog=useRef();
    const userLost=timeRemaining<=0;
    const score=Math.round((1-timeRemaining/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost &&  <h2>You lost</h2>}
            {!userLost &&  <h2>Your score {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stoped the timer with <strong>{(timeRemaining/1000).toFixed(2)} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
})
export default ResultModal;
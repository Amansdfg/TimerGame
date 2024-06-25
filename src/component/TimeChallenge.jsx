import { useRef ,useState} from "react";
import ResultModal from "./ResultModal";
function TimeChallenge({title,targetTime}){
    let timer = useRef();   
    let dialog = useRef();
    const[timeRemaining,setTimeRemaining]=useState(targetTime*1000);
    const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;
    if(timeRemaining<=0){
        clearInterval(timer.current);
        setTimeRemaining(targetTime*1000);
        dialog.current.open();
    }
    function handleStart(){
        timer.current=setInterval(()=>{
            setTimeRemaining(prev=>prev-10);
        },10);
    }
    function handleStop(){
        clearInterval(timer.current);
    }
    return(
        <>
        <ResultModal ref={dialog} result="lost" targetTime={targetTime} timeRemaining={timeRemaining}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={timerIsActive?handleStop:handleStart}>
                    {timerIsActive?"Stop":"Start"} challenge
                </button>
            </p>
            <p className={timerIsActive?"active":undefined}>
                {timerIsActive?"Time is running... ":" Timer inactive"}
            </p>
        </section>
        </>
    )
}
export default TimeChallenge;
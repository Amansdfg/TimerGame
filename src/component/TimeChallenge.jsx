import { useRef ,useState} from "react";
import ResultModal from "./ResultModal";
function TimeChallenge({title,targetTime}){
    let timer = useRef();
    const[timerStarted,setTimerStarted]=useState(false);
    const[timeExpired,setTimeExpired]=useState(false);
    function handleStart(){
        timer.current = setTimeout(()=>{
            setTimeExpired(true);
       },targetTime*1000);
       setTimerStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return(
        <>
        {timeExpired && <ResultModal result="lost" targetTime={targetTime}/>}
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time"> 
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={timerStarted?handleStop:handleStart}>
                    {timerStarted?"Stop":"Start"} challenge
                </button>
            </p>
            <p className={timerStarted?"active":undefined}>
                {timerStarted?"Time is running... ":" Timer inactive"}
            </p>
        </section>
        </>
    )
}
export default TimeChallenge;
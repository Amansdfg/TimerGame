import {useState,useRef} from "react";
function Player(){
    const playerName=useRef();
    const[enteredPlayerName ,setEnteredPlayerName]=useState(null);
    function handleClick(){
        setEnteredPlayerName(playerName.current.value);
    }
    return(
        <section id="player">
            <h2>Welcome {enteredPlayerName??"unknown player"}</h2>
            <p>
                <input ref={playerName}/>            
                <button onClick={handleClick}>Set name</button>
            </p>
        </section>
    )
}
export default Player;
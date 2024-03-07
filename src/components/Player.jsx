import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();

  const [enteredName, setEnteredName] = useState(null);
  // const [changeName, setChangeName] = useState(false)

  // function handleName(event) {
  //   // setChangeName(false)
  //   setEnteredName(event.target.value);
  // }

  function handleClick() {
    // setChangeName(true)
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      {/* <h2>Welcome {changeName ? enteredName : "unknown entity"}</h2> */}
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input
         type="text" 
         ref={playerName} 
         />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

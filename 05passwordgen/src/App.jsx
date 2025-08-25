import { useState,useCallback,useEffect, useRef } from "react";

function App() {
  //Use of UseState hooks
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // Use of useCallback hook for password generation memory caching
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()?{}[]><~/";

    //Password Generator Logic
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    // Giving setPassword value of pass
    setPassword(pass);
  }, [length, number, character, setPassword]);

  //Use of useEffect hook for running the function
  useEffect(()=>{passGen()},[length,number,character,passGen])

  // Use of useRef hook for referencing UI elements
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select() // To show select effect
    passwordRef.current?.setSelectionRange(0,length) // To select range of selection
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-stone-900 bg-green-700">
      <h1 className="text-2xl text-center text-black my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg mb-4 overflow-hidden bg-white">
        <input
          value={password}
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-green-400 text-black px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="numberInput"
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook varibale 
  const passwordRef = useRef(null)
  const copyPassToClipBoard = useCallback(()=>{

    //showing blue highlighter over the password
    passwordRef.current?.select()
    // important for selecting custom length
    // passwordRef.current?.setSelectionRange(0, {length})
  // copy button functionality logic will not work in nextjs
    window.navigator.clipboard.writeText(password)

  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+={}[]|\\?/<>,.;:"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
    // console.log(pass);
  },
    [length, numberAllowed, charAllowed, setPassword])
  
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]) 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700">
        <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPassToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            {/* creating the slider for setting length of password  */}
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            // this links the range slider to lemgth tabel 
            onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            {/* numberAllowed checkbox  */}
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            // Number needed checkbox logic
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
             />
             <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            {/* charAllowed checkbox  */}
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            // Character needed checkbox logic
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
             />
             <label htmlFor="">Character</label>
          </div>
        </div>
        </div>


    </>
  )
}

export default App

import { useState } from "react"

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
       <div className="w-full h-screen duration-200 justify-center flex" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12">
          <button onClick={()=> setColor("red")} className="p-4 m-4 border-2 border-solid border-black rounded-2xl bg-red-600 text-white ">Red</button>
          <button onClick={()=> setColor("green ")} className="p-4 m-4 border-2 border-solid border-black rounded-2xl bg-green-900 text-white">Green</button>
          <button onClick={()=> setColor("yellow")} className="p-4 m-4 border-2 border-solid border-black rounded-2xl bg-yellow-500 text-white">Yellow</button>
          <button onClick={()=> setColor("blue")} className="p-4 m-4 border-2 border-solid border-black rounded-2xl bg-blue-700 text-white">Blue</button>
          <button onClick={()=> setColor("white")} className="p-4 m-4 border-2 border-solid border-black rounded-2xl bg-white text-black">White</button>
          <button onClick={()=> setColor("black")} className="p-4 m-4 border-2 border-solid border-purpel-600 rounded-2xl bg-black text-white">Black</button>
        </div>
       </div>
    </>
  )
}

export default App

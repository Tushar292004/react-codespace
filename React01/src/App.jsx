import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      count++;
    }
    else{
      count = 20;
    }
    setCount(count);
    console.log("Adding value :", count);

  }
  const subValue = () => {
    if (count > 0) {
      --count;
    }
    else{
      count = 0;
    }
    setCount(count);
    console.log("Subracting Value :", count);
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>Value : {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Subtract Value</button>
    </>
  );
}

export default App

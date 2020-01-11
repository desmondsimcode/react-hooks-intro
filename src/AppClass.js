import React, { useState } from "react";

function App() {
  const [count,setCount]=useState(0)
  const addValue=()=>{
    setCount(count+1)
  }
  return (
    <button onClick={addValue}>Click me {count} times</button>
  );
}

export default App;

import { useState } from "react" //importing the required react hook is necessary before proceeding

function App() {


  let [counter , setCounter] = useState(0)  //setting up the current state value

  const addValue = () => {
    setCounter(counter+1)  //updating the state

  }

  const removeValue = () => {
    setCounter(counter-1) // updating the state
  }


  return (
    <>
    <h1>Day 2 of React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value</button><br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

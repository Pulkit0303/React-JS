import { useState } from 'react'
import './App.css'

function App() {
  //et counter = 5
  let [count,setCount] = useState(0)
  const addValue = ()=>{
    if(count<20){
      count +=1
      setCount(count)
    }
    // setCount(count = count + 1)
  }
  const removeValue = () =>{
    if(count>0){
      count -= 1
      setCount(count)
    }
    // setCount(count = count - 1) can give like this
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}> Remove Value</button>
    <br/>
    <p>footer: {count}</p>
    </>

  )
}

export default App

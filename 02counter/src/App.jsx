import { useState } from 'react'
import './App.css'

function App() {
  let [BGC,setBGC] = useState('0')
  const darkMode = () =>{
    if(BGC!=="#121212"){
      setBGC('#121212')
    }
  }
  const lightMode = () =>{
    if(BGC!=="#dbd8d8ff"){
      setBGC('#dbd8d8ff')
    }
  }

  
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
    <div style={{backgroundColor: BGC, padding: '30px', borderRadius: '20px'}}>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}> Remove Value</button>
    <br/>
    <button onClick={darkMode}>DarkMode</button>
    <br/>
    <button onClick={lightMode}>LightMode</button>
    <br/>
    <br/>
    <p>footer: {count}</p>
    </div>

  )
}

export default App

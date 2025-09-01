import React, { useEffect, useState } from 'react'

function Joke() {
    const [joke,setJoke] = useState([])
    useEffect(()=>{
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response)=> response.json())
        .then((joke)=> setJoke(joke))
    },[])
  return (
    <div className="text-center m-4 bg-green-800 text-white p-4 text-3xl">
        Joke Setup: {joke.setup} 
        <br/>
        Punchline: {joke.punchline}
      </div>
  )
}

export default Joke
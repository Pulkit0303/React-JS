import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    //Return takes only one tag so we are adding our components inside empty tag
    <> 
      <h3>Hello. Here is your Cappicino!</h3>
    </>
  )
}

const myElement = (
  <a href ='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "Instagram"
const anotherElement = React.createElement(
  'a',
  {href:'https://instagram.com',
    target: '_blank'
  },
  'Click to visit',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // App() we can type like this since React is a JS 
  // <>
  //<App />
  // <MyApp/>
  // </>
  //myElement,
  anotherElement
)

import './App.css';
import Coffee from './Coffee';
function App() {
  const username = "Pulkit"
  return (
    <>
    <h1>Hello Welcome to World of {username}'s Coffee World!</h1>
    <Coffee/>
    </>
  )
}

export default App
// In Line 7 we can use only evaluated expression (resulted value not expression)
// Allowed: {username} ✅
// Not Allow {if(true){{username}}} ❌
// Expressions to be written in function : function Print(){if(true){{username}}}
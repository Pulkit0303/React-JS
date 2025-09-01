import './App.css'
import NewContextProvider from './context/NewContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
    <NewContextProvider>
      <h1>Welcome to ContextAPI class</h1>
      <Login/>
      <Profile/>
    </NewContextProvider>
    </>
  )
}

export default App

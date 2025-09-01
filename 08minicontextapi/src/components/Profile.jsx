import React,{useContext} from 'react'
import NewContext from '../context/NewContext'

function Profile() {
    const {New} = useContext(NewContext)
    if(!New) return <div>Please Login!</div>

  return (
    <div>
        <h1>Welcome to the website {New.username}</h1>
    </div>
  )
}

export default Profile
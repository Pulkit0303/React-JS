import React, { useState, useContext } from "react";
import NewContext from '../context/NewContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setNew} = useContext(NewContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setNew({username,password})
  };
  return (
    <div>
      <h2>Login</h2>

      <input type="text" value={username} placeholder="username" 
      onChange={(e)=>setUsername(e.target.value)}/>

      <input type="text" value={password} 
      onChange = {(e)=>setPassword(e.target.value)} placeholder="password" />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

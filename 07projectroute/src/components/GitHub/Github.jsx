import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // Same work is done by githubFunc but in optimized way
  //   const [data,setData] = useState([])
  // useEffect( ()=>{
  //   fetch("https://api.github.com/users/Pulkit0303")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  // },[]
  // );

  return(
    <>
    <div className="text-center m-4 bg-yellow-300 text-black p-4 text-3xl">GitHub Repos: {data.public_repos}</div>
    <img src={data.avatar_url} alt="GitHubProfile" width={'300px'}/>
    </>
  )
}

export default Github;

export const gitHubFunc = async()=>{
  const response = await fetch("https://api.github.com/users/Pulkit0303")
  return response.json()
}

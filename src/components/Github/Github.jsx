import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

    const data = useLoaderData()
    // const [data , setData] = useState(0);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/alokmishra70')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })

    // } , [])

  return (
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
    <img src ={data?.avatar_url} alt='Git Hub profile' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/alokmishra70')
    return response.json();
}
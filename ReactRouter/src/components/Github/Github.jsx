import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData()

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch('https://api.github.com/users/Tushar292004')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
//   }, [data]);

  return (
    <div className='text-center m-4 text-black p-6 text-3xl flex justify-center items-center gap-x-1.5 flex-col'>
        Name : {data.name} <br/>
        Github Followers : {data.followers}<br/>
        Bio : {data.bio}<br/>
        Location : {data.location}<br/>
        <img src={data.avatar_url} alt="Git picture"  width={300} className='m-2  p-2 rounded-3xl'/>
    </div>
  )
}

export default Github

//optimized method for loading data and storing in cache 
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Tushar292004')
    return response.json()
}
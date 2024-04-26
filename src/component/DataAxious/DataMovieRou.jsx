import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataMoveRou() {
    const [event ,setEvent]=useState([]);
const {id}=useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((Response=>{
            setEvent(Response.data)
        }))
        .catch ((error)=>{
            console.log("Error for testing api",error);
        })
    },[id])

    

  return (
    <>
  
  
          <div className='w-fit  h-[400px] border border-red-500 rounded relative'>
                <h2 className='text-white text-4xl font-bold absolute bottom-18 bg-black left-16'>
                {event.id}
                </h2>
                <h1>{event.title}</h1>
            <img className='h-[40vh] ' src='https://img.freepik.com/premium-vector/movie-theater-signboard-blue_34230-295.jpg'/>
          </div>

    </>
  )
}

export default DataMoveRou;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Datamovie = () => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(7)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((Response => {
        setData(Response.data)
        console.log(Response)
      }))
      .catch((error) => {
        console.log("Error for testing api", error);
      })
  })

  const showmore = () => {
    setMore(more + 1)
  }
  const showless = () => {
    setMore(more - 1)
  }




  return (
    <>
      <div className='w-full h-auto px-20 py-16 grid grid-cols-3 gap-10'>
        {data.slice(0, more).map((value, index) => (
          <div key={index} className={`w-full h-[450px] border border-red-500 bg-blue-400   rounded relative`}>


            <h2 className='text-white text-4xl font-bold absolute bottom-18 bg-black left-16'>
              {value.id}
            </h2>
            <h1>{value.title}</h1>
            <h2>{value.userId}</h2>
            <img className='h-[40vh] ' src='https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?rs=1&pid=ImgDetMain' />
            {/* <Link to={data/${value.id}}> <button className='w-[5rem] h-[6vh] border-2 border-red-900 bg-yellow-300
          text-black font-bold ml-[7rem] '>MORE &nbsp;
         <i class="fa-solid fa-caret-right"></i></button></Link><br/><br/> */}
         <NavLink to={`/datamovie/${value.id}`}>
         <button  className='w-[15rem] h-[6vh] bg-red-600 text-black font-bold '>Get more </button>

         </NavLink>

          </div>

        ))}
        <button onClick={() => showmore()} className='w-[15rem] h-[6vh] bg-red-600 text-black font-bold '>Get more Movie</button>
            <button onClick={() => showless()} className='w-[15rem] h-[6vh] bg-red-600 text-black font-bold '>Get less Movie</button>
      </div>


    </>
  )
}

export default Datamovie;
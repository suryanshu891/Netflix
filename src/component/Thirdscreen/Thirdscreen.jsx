import React from 'react'
import Fourthscreen from '../Fourthscreen/Fourthscreen';

const Thirdscreen = () => {
  return (
    <>
    <div className='h-[80vh] w-full bg-black border border-zinc-800 text-white flex justify-between'>
      <div className='w-1/2 flex justify-center items-center ' >
        <div >
            <h1 className='text-5xl font-bold'>Watch everywhere</h1>
            <h2 className='mt-[1rem] text-2xl'>Stream unlimited movies and TV shows on your</h2>
            <h3 className='text-1xl'>phone, tablet, laptop, and TV.</h3>
            </div>
        </div>

        <div className='w-1/2 flex justify-center items-center'>
            <img className='mr-[5rem]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
            </div>
       

    </div>
    <Fourthscreen/>
    </>
   
  )
}

export default Thirdscreen;
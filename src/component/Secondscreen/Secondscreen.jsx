import React from 'react'
import Thirdscreen from '../Thirdscreen/Thirdscreen'

const Secondscreen = () => {
  return (
    <>
    <div className='h-[80vh] w-full border border-zinc-800 bg-black flex justify-between'>
        <div className='w-1/2 flex justify-center items-center '>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

        </div>
        
        <div className='w-1/2 flex justify-start items-center  text-white '>
          <div>
          <h1 className='text-5xl font-bold'>Download your shows</h1>
          <h1 className='text-5xl mt-[1rem]'>to watch offline</h1>
          <p className='text-2xl mt-[1rem]'>Save your favourites easily and always have something</p>
          <p className='text-2xl'> to watch.</p>
          </div>
      
          
        </div>


    </div>
    <Thirdscreen/>
    </>
  
  )
}

export default Secondscreen
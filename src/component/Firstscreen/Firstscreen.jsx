import React from 'react'
import Secondscreen from '../Secondscreen/Secondscreen'

const Firstscreen = () => {
  return (
    <>
      <div className='bg-black h-[80vh] width-full  border border-zinc-800 text-white flex justify-between '>
        <div className=' w-1/2 flex justify-center items-center ' >
          <div>
            <p className='text-5xl'><b>Enjoy on your TV</b></p>
            <p className=' mt-[1rem] text-[1rem]'>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
            <p className='mt-[0.5rem]'>Apple TV, Blu-ray players and more.</p>
            
          </div>
        </div>
        <div>
          <img className='' src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />

        </div>

      </div>
      <Secondscreen />
    </>

  )
}

export default Firstscreen
import React from 'react'
import Fifthscreen from '../Fifthscreen/Fifthscreen';

const Fourthscreen = () => {
  return (
    <>
    <div className='h-[80vh] w-full border border-zinc-800 bg-black flex justify-between text-white'>
        <div className='w-1/2 flex justify-center items-center'>
        <img className='' src="https://occ-0-2482-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
            
         
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <div>
          <h1 className='text-5xl font-bold '>Create profiles for kids</h1>
          <p className=' text-2xl  mt-5' >Send children on adventures with their favourite</p>
          <p>characters in a space made just for them—free with</p>
          <p>your membership.</p>
          </div>
        </div>

    </div>
    <Fifthscreen/>
    </>
  )
}

export default Fourthscreen;
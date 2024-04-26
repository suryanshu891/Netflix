
import React from 'react'
import Firstscreen from '../Firstscreen/Firstscreen';


const Home = () => {
    return (
        <>

            <div className='h-[100vh] w-full '>
                <div className=' bg-[url(https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg)] h-full w-full bg-no-repeat bg-cover bg-center brightness-90 '>
                    <div className='flex text-center items-center'>
                        <div className='h-[90vh] w-full text-white flex flex-col items-center justify-center '>
                            <p className=' text-5xl'>Unlimited movies, Tv shows and more</p>
                            <p className='mt-[1rem] text-[2rem]'>Watch anywhere,cancel anytime </p>
                            <p className='mt-[2rem] text-[1rem] '>Ready to watch? Enter your email to create or resatrt your membership </p>
                            <div className='flex  items-center mt-5 gap-3'>

                                <input className='  h-[35px] w-[20vw] bg-transparent border text-white border-zinc-800 gap-6' type="text" placeholder='email address' />
                                <button className='border border-red-700 bg-red-700 h-[35px] w-[10vw] '>Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <Firstscreen />

        </>)
}

export default Home;
import React, { useState } from 'react'
import Sixthscreen from '../Sixthscreen/Sixthscreen';

function Fifthscreen  () {
    const [popup, setpopup]= useState({});

    const pluspopup=(index)=>{
        setpopup(textpopup => ({
            ...textpopup,
            [index]: !textpopup[index]



        }));
    }
   
    return (
        <>
            <div className='h-fit w-full bg-black border-4 border-zinc-800 text-white'>

                <h1 className='text-5xl text-white font-bold mt-5 flex justify-center cursor-pointer '>Frequently Asked Questions</h1>
                <div className='  ' >
                    <div  onClick={() =>pluspopup(0)}className=' h-14 w-[70vw]  bg-zinc-800 mt-6 flex justify-between items-center m-auto p-2 ' >
                        <h1 className='text-2xl'>What is Netflix?</h1>
                        <p className={` text-5xl ${popup[0] ? 'rotate-45' : ''}`}>+</p>

                    </div>
                    <div className={`h-fit w-[70vw] text-white bg-zinc-800 m-auto py-2 px-2 ${popup[0] ? 'block opacity-100': 'hidden opacity-0'}`}>
                        <p className='text-2xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br />

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly<br /> price. There's always something new to discover, and new TV shows and movies are added every week!</p>



                    </div>
                    <div onClick={() =>pluspopup(1)}className='h-14 w-[70vw] mt-2 bg-zinc-800  flex justify-between items-center m-auto p-2'>
                        <h1 className='text-2xl'>How much does Netflix cost?</h1>
                        <p className={`text-5xl ${popup[1] ? 'rotate-45' : ''}`}>+</p>

                    </div>
                    <div className={`h-fit w-[70vw] bg-zinc-800 mt-1 m-auto px-2 py-2 ${popup[1] ? 'block opacity-100':'hidden opacity-0'}`}>
                        <p className='text-2xl'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>88
                    </div>
                    <div onClick={() =>pluspopup(2)} className='h-14 w-[70vw] mt-2 bg-zinc-800  flex justify-between items-center m-auto p-2'>
                        <h1 className='text-2xl'>Where can i Watch?</h1>
                        <p className={`text-5xl ${popup[2] ? 'rotate-45' : ''}`}>+</p>

                    </div>
                    <div className={`h-fit w-[70vw] bg-zinc-800 m-auto px-2 py-2 ${popup[2] ? 'block opacity-100' : 'hidden opacity-0'}`}>
                        <p className='text-2xl'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                    <div onClick={()=>pluspopup(3)} className='h-14 w-[70vw] mt-2 bg-zinc-800 flex justify-between items-center m-auto p-2'>
                        <h1 className='text-2xl'>How do I cancel?</h1>
                        <p className={`text-5xl ${popup[3] ? 'rotate-45' : ''}`}>+</p>
                    </div>
                    <div className={`h-fit w-[70vw] bg-zinc-800 m-auto px-2 py-2  ${popup[3] ? 'block opacity-100':'hidden opacity-0'}`}>
                        <p className='text-2xl'> Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>

                    </div>
                    <div onClick={()=>pluspopup(4)} className='h-14 w-[70vw] mt-2 bg-zinc-800 flex justify-between items-center m-auto p-2'>
                        <h1 className='text-2xl'>What can I Watch on Netflix?</h1>
                        <p className={`text-5xl ${popup[4] ? 'rotate-45' : ''}`}>+</p>
                    </div>
                    <div className={`h-fit w-[70vw] bg-zinc-800 m-auto px-2 py-2 $ ${popup[4] ? 'block opacity-100' : 'hidden opacity-0'}`}>
                        <p className='text-2xl'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>

                    </div>
                    <div onClick={()=>pluspopup(5)} className='h-14 w-[70vw] mt-2 bg-zinc-800 flex justify-between items-center m-auto p-2 '>
                        <h1 className='text-2xl'>Is Netflix good for kids</h1>
                        <p className={`text-5xl ${popup[5] ? 'rotate-45' : ' '}`}>+</p>


                    </div>
                    <div className={`h-fit w-[70vw] bg-zinc-800 m-auto px-2 py-2 ${popup[5] ? 'block opacity-100': 'hidden opacity-0'}`}>
                        <p className='text-2xl'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>

                    </div>

                    {/* <div className='h-[30vh] w-full bg-black flex justify-center items-center mb-5 gap-3'> */}
                    <h1 className='text-2xl mt-10 flex justify-center items-center '>Ready to watch? Enter your email to create or restart your membership.</h1>
                    <div className=' h-fit flex justify-center items-center gap-3 mt-5'>
                        <input className='h-10 w-[25vw] border border-zinc-600 bg-transparent' type="text" placeholder="email address" />
                        <button className='text-white h-10 w-[12vw] bg-red-600 border border-red-600'>Get Started</button>
                        {/* </div> */}
                    </div>







                </div>
            </div>
            <Sixthscreen />
        </>
    )
}

export default Fifthscreen;
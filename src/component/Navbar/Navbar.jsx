
import React from 'react'
// import { useState,useEffect } from 'react';
import Home from '../Home/Home'


function Navbar() {
  // const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
      const CLIENT_ID = '908031282335-sjdh73pp62avlbbkg0qklfsed32qalim.apps.googleusercontent.com';
      const REDIRECT_URI = 'http://localhost:3000'; // Redirect URI configured in Google Developers Console
      const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send'
      const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;

      window.location.href = AUTH_URL;
  };

  // const getAccessToken = ()=>{
  //   const url =window.location.href
  //   const token = url.match(/access_token=([^&]+)/)
  //   localStorage.setItem("Token",token && token[1])
  // }

  // useEffect(()=>{
  //   getAccessToken()
  // },[])

  

  return (
    <>
      <div className='h-15 w-full  bg-black text-white px-8 py-2' >
        <div className='h-[4rem] w-full flex justify-between    '>

          <img src="https://up.yimg.com/ib/th?id=OIP.I9cvYdJTPAHPFgk7z4wj7QHaEK&pid=Api&rs=1&c=1&qlt=95&w=180&h=101" alt="" />
          <div className='h-[3rem] w-[15rem]  flex justify-between py-4'>
            <button className='h-7 w-[7rem] border border-red-1900 rounded' >English</button>
            <button  className='h-7 w-[7rem] border border-red-1900 rounded bg-red-600' onClick={handleLogin}>SIGN IN</button>

           
          </div>

        </div>
      </div>
      <Home/>
      
    </>

  )
}

export default Navbar;
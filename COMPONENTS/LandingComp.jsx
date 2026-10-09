import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingComp() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
   <>
   <div className="wrapper">
    <div className="head flex items-center justify-between py-5">
      <h1 className='text-2xl font-bold'>FORM</h1>
      <button className='w-[100px] bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 cursor-pointer' onClick={logout}>Log Out</button>
    </div>
   </div>
   
   
   
   </>
  )
}

export default LandingComp

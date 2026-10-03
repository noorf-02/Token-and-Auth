import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginComp() {
  const [value,setValue] = useState({
    username:"",
    password:""
  });

  function handleValue (e){
    const inputValue = e.target.value;
    const name = e.target.name;
    setValue({...value,[name]:inputValue});
  }

  function submitLogIn(e){
    e.preventDefault();
    console.log("Log In was just clicked")
  }
 

  return (
     <>
   <div className="wrapper min-h-screen flex justify-center items-center">
    <form onSubmit={submitLogIn} className="contain flex flex-col gap-6">
      <p className='text-2xl font-bold text-center'>Welcome Back</p>

      <div className="flex flex-col gap-2">
        <p className='font-medium'>Enter Username:</p>
        <input type="text" name="username" id="" placeholder='eg: johndoe_1' className='border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none' value={value.username} onChange={handleValue}/>
      </div>
      <div className="flex flex-col gap-2">
        <p className='font-medium'>Enter Password:</p>
        <input type="password" name="password" id="" placeholder='********' className='border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none' value={value.password} onChange={handleValue}/>
      </div>

      <button type='submit' className='w-[320px] bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 cursor-pointer'>Log In</button>
      <p>Don't have an account? <span className='italic underline'><Link to={"/sign-up"}>Sign Up</Link></span></p>
    </form>
   </div>
   
   </>
  )
}

export default LoginComp

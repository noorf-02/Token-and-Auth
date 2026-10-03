import React from 'react'
import { Link } from 'react-router-dom'

function LoginComp() {
  return (
     <>
   <div className="wrapper min-h-screen flex justify-center items-center">
    <form className="contain flex flex-col gap-6">
      <p className='text-2xl font-bold text-center'>Welcome Back</p>

      <div className="flex flex-col gap-2">
        <p className='font-medium'>Enter Username:</p>
        <input type="text" name="username" id="" placeholder='eg: johndoe_1' className='border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none'/>
      </div>
      <div className="flex flex-col gap-2">
        <p className='font-medium'>Enter Password:</p>
        <input type="text" name="username" id="" placeholder='********' className='border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none'/>
      </div>

      <button type='submit' className='w-[320px] bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 cursor-pointer'>Log In</button>
      <p>Don't have an account? <span className='italic underline'><Link to={"/sign-up"}>Sign Up</Link></span></p>
    </form>
   </div>
   
   </>
  )
}

export default LoginComp

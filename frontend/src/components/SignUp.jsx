import React from 'react'

const SignUp = () => {
  return (
    
      <form className='flex flex-col gap-4 w-full justify-center items-center' >
      <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="text" name="username" id="" placeholder='Name'/>
      <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="email" name="email" id="" placeholder='Email ID'/>
      <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="password" name="password" id="" placeholder='Password'/>
      <button type="submit" className='bg-blue-500 px-14 py-2 rounded-lg xl:text-xl font-inter text-white mt-4'>Sign Up</button>
      </form>
  )
}

export default SignUp

import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [logintype, setLogintype] = useState('sign-in')

  return (
    <div className='bg-secondary min-h-screen flex justify-center items-center'>
        
      <div className='bg-white w-full lg:w-1/2 xl:w-1/3 rounded-lg flex flex-col justify-center items-center gap-6 py-12'>
            <h1 className='text-lg lg:text-4xl font-inter font-semibold'>Login</h1>

            <div className='flex gap-4'>
            <button>Sign Up</button>
            <button>Sign In</button>
            </div>

            <form className='flex flex-col gap-4 w-full justify-center items-center' >
            <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="text" name="username" id="" placeholder='Name'/>
            <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="email" name="email" id="" placeholder='Email ID'/>
            <input className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="password" name="password" id="" placeholder='Password'/>
            <button type="submit" className='bg-blue-500 px-14 py-2 rounded-lg xl:text-xl font-inter text-white mt-4'>Login</button>
            </form>
            <div>

            </div>
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Login = () => {

    const [logintype, setLogintype] = useState('sign-in')

    const handleLoginType = (type) => {
      if(type !== logintype){
        setLogintype(type)
      }
    }


  return (
    <div className='bg-secondary min-h-screen flex justify-center items-center px-8'>
        
      <div className='bg-white w-full xl:w-1/2 2xl:w-1/3 rounded-lg flex flex-col justify-center items-center gap-6 py-12'>
            <h1 className='text-lg lg:text-4xl font-inter font-semibold'>Login</h1>

            <div className='flex gap-4'>
            <button onClick={ () => handleLoginType('sign-up')} className={logintype === 'sign-up' ? 'underline underline-offset-8 decoration-4 decoration-primary' : 'underline-none'}>Sign Up</button>
            <button onClick={ () => handleLoginType('sign-in')} className={logintype === 'sign-in' ? 'underline underline-offset-8 decoration-4 decoration-primary' : 'underline-none'}>Sign In</button>
            </div>

            {logintype === 'sign-in' ? <SignIn /> : <SignUp />}

            <div>

            </div>
      </div>
    </div>
  )
}

export default Login

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-primary h-[112px] px-[37px]'>
      <h1 className='font-logofont text-4xl text-white'>HobbyHive</h1>
      <nav className='flex items-center gap-16'>
        <ul className='flex gap-12'>
            <li className='font-inter text-xl font-semibold text-white'>Home</li>
            <li className='font-inter text-xl font-semibold text-white'>Explore</li>
            <li className='font-inter text-xl font-semibold text-white'>Chat</li>
        </ul>
        <button className='bg-white rounded-full text-xl font-inter text-primary px-8 py-2 font-semibold'>Login</button>
      </nav>
    </div>
  )
}

export default Navbar

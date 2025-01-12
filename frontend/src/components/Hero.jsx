import React from 'react'
import heroimg from '../assets/heroimg.png'

const Hero = () => {
  return (
    <div className='bg-secondary h-[calc(100vh-112px)] flex justify-center items-center px-[37px] gap-2'>
        <div className='flex flex-col gap-12'>
            <h1 className='text-white text-7xl font-inter text-wrap w-[700px]'>A Buzzing Community for every <span className='text-primary font-light'>Hobbyist.</span></h1>
            <button className='bg-primary text-white font-inter text-3xl px-8 py-4 w-fit rounded-lg'>Join Now</button>
        </div>
        <div>
            <img src={heroimg} alt="heroimg" className='size-[700px]'/>
        </div>

    </div>
  )
}

export default Hero

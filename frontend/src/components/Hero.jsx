import React from 'react'
import heroimg from '../assets/heroimg.png'

const Hero = () => {
  return (
    <div className='bg-secondary min-h-[calc(100dvh-112px)] flex justify-center xl:items-center pl-[45px] pr-[37px]'>
      <div className='flex flex-col xl:flex-row justify-center items-center xl:h-fit pt-12'>


        <div className='flex flex-col justify-center gap-12'>
            <h1 className='text-white 2xl:text-7xl xl:text-5xl lg:text-6xl md:text-5xl text-3xl font-inter text-wrap 2xl:w-[700px] xl:w-[600px] lg:w-[680px] md:w-[550px]'>A Buzzing Community for every <span className='text-primary font-light'>Hobbyist.</span></h1>
            <button className='bg-primary text-white font-inter 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-lg px-8 py-4 w-fit rounded-lg self-center xl:self-start'>Join Now</button>
        </div>


        <div>
            <img src={heroimg} alt="heroimg" className='2xl:size-[700px] xl:size-[560px] lg:size-[600px] md:size-[570px]'/>
        </div>


        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import HomeText from './Partials/HomeText'
import HeroText from './Partials/HeroText'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <HomeText />
        <HeroText />
    </div>
  )
}

export default Hero
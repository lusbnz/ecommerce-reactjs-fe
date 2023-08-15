import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/about.jpeg'
import Aos from "aos";
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img data-aos='fade-down' src={aboutImg} className="max-w-[250px] md:max-w-md rounded-lg shadow-2xl" />
        <div className='text-center lg:text-start grid place-items-center lg:place-items-start'>
          <h2 data-aos='fade-down' className="text-4xl md:text-6xl font-semibold pb-12">
            Design your <br />
            Comfort zone
          </h2>
          <p data-aos='fade-right' className="py-6 hidden md:block text-sm md:text-md max-w-[80%] lg:max-w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
            alias?
          </p>
          <Link to='/products' className='btn btn-neutral'>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
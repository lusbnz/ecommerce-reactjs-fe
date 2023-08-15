import React, { useEffect } from 'react'
import { services } from '../utils/constant'
import Aos from "aos";
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='flex flex-col justify-center py-12 md:py-24 px-6 md:px-24 bg-base-200 '>
      <article>
        <h3 data-aos='fade-right' className="text-xl md:text-2xl px-4 pb-6 md:pb-12 text-start font-semibold">
          Custom furniture <br /> Built only for you
        </h3>
      </article>
      <div data-aos='zoom-in' className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {services.map((item) => {
          return (
            <article key={item.id} className='flex flex-col items-center bg-base-300 rounded-xl'>
              <span className='pt-6'>{item.icon}</span>
              <h4 className="text-md md:text-xl px-4 lg:pt-6 text-center font-semibold">{item.title}</h4>
              <p className='py-6 text-sm lg:text-md w-full lg:mx-auto text-center px-2 md:px-4'>{item.text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Services
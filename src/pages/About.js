import React from 'react'
import aboutImg from '../assets/about.jpeg'
import { Link } from 'react-router-dom'
import { PageHero } from '../components'

const About = () => {
  return (
    <>
      <PageHero title='About'/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aboutImg} className="max-w-[250px] md:max-w-md rounded-lg shadow-2xl" />
          <div className='text-center lg:text-start grid place-items-center lg:place-items-start'>
            <h2 className="text-4xl md:text-6xl font-semibold">Our Story</h2>
            <p className="py-6 text-sm md:text-md max-w-[80%] lg:max-w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
            <Link to='/products' className='btn btn-neutral'>
              Find your item
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-4 text-center'>
      <h1 className='font-semibold text-6xl md:text-8xl'>404</h1>
      <h4 className='text-md md:text-xl'>Sorry, the page you tried cannot be found</h4>
        <Link to='/' className='btn'>
          Back to home
        </Link>
    </div>
  )
}

export default Error
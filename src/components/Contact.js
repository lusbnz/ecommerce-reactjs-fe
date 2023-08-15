import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col py-12 md:py-24 justify-center items-center'>
      <h3  className="text-xl md:text-2xl px-4 text-center font-semibold">Join our newsletter and get 20% off</h3>
      <div className='grid grid-cols-1 gap-4 items-center place-items-center'>
        <p className="py-6 text-sm md:text-md w-full mx-auto text-center px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          sint unde quaerat ratione soluta veniam provident adipisci cumque
          eveniet tempore?
        </p>
        <div className="join max-w-[250px] md:max-w-full">
          <input className="input input-bordered join-item max-w-[150px] md:max-w-full" placeholder="Email" />
          <button className="btn btn-neutral join-item">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
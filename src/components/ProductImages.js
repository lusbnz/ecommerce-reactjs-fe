import React, { useState } from 'react'

const ProductImages = ({images = [[]]}) => {
  const [main, setMain] = useState(images[0])
  return (
    <div className='p-8'>
      <img src={main.url} alt='img' className='h-[300px] md:h-[600px] lg:h-[500px] w-full block rounded-xl object-cover'/>
      <div className='mt-4 grid grid-cols-5 gap-4'>
        {images.map((image, index)=>{
          return(
            <img
              src={image.url}
              alt='img'
              key={index}
              className={`${image.url === main.url ? 'h-[50px] md:h-[100px] lg:h-[75px] w-full block rounded-xl object-cover border cursor-pointer' : 'h-[50px] md:h-[100px] lg:h-[75px]  w-full block rounded-xl object-cover cursor-pointer'}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages
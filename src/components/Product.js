import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice} from '../utils/helper'

const Product = ({image, name, price, id}) => {
  return (
    <div className='pt-12 pb-6 px-6'>
      <Link to={`/products/${id}`}>
      <img src={image} alt={image} className='h-[225px] w-full object-cover block rounded-xl hover:opacity-70 hover:shadow-lg cursor-pointer'/>
      </Link>
      <div className='md:flex justify-between items-center py-4 hidden'>
        <h4 className='text-md md:text-xl'>{name}</h4>
        <p className="text-sm md:text-md">{formatPrice(price)}</p>
      </div>
    </div>
  )
}

export default Product
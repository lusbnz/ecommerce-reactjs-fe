import React from 'react'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
    return (
        <div className='px-2 flex flex-col gap-8'>
            {products.map((product) => {
                return (
                    <article key={product.id} className='grid md:grid-cols-200 lg:grid-cols-300 text-center lg:text-start place-items-center items-center'>
                        <img src={product.image} alt={product.name} className='w-[300px] h-[200px] block object-cover rounded-xl mb-4 hover:opacity-70 cursor-pointer' />
                        <div className='px-4'>
                            <h4 className='text-md md:text-xl'>{product.name}</h4>
                            <p className="text-sm md:text-md">{formatPrice(product.price)}</p>
                            <p className="text-sm md:text-md w-full">{product.description.substring(0, 150)}...</p>
                            <Link to={`/products/${product.id}`} className='btn btn-neutral btn-sm my-2'>
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ListView
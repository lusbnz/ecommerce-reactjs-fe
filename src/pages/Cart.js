import React from 'react'
import { CartContent, PageHero } from '../components'
import { useCartContext } from '../contexts/cart_context'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <div className='text-center bg-base-100 h-screen flex flex-col gap-4 justify-center items-center'>
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Your cart is empty</h3>
        <Link to='/products' className='btn btn-neutral'>
          Fill it
        </Link>
      </div>
    )
  }
  return (
    <div className='bg-base-100'>
      <PageHero title='Cart' />
      <div>
        <CartContent />
      </div>
    </div>
  )
}

export default Cart
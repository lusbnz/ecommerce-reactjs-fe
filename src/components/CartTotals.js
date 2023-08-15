import React from 'react'
import { formatPrice } from '../utils/helper'
import { useCartContext } from '../contexts/cart_context'

const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext()
  return (
    <div className='mt-12 flex flex-col  justify-center border rounded-xl p-6'>
        <p className='text-md pb-2'>Subtotal: <span>{formatPrice(total_amount)}</span></p>
        <p className='text-md pb-2'>Shipping fee: <span>{formatPrice(shipping_fee)}</span></p>
        <hr className='py-2'/>
        <h4 className='font-semibold  text-md md:text-lg'>Order total: <span>{formatPrice(total_amount + shipping_fee)}</span></h4>
    </div>
  )
}

export default CartTotals
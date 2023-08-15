import React from 'react'
import { useCartContext } from '../contexts/cart_context'
import { CartColumns, CartItem, CartTotals } from '../components'
import { Link } from 'react-router-dom'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
    return (
        <div className='p-12 md:p-24'>
            <CartColumns />
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr />
            <div className='flex justify-between mt-8'>
                <Link to='/products' className='btn btn-neutral btn-md'>
                    Continue shopping
                </Link>
                <button
                    type='button'
                    className='btn btn-ghost btn-md hidden lg:block'
                    onClick={clearCart}
                >
                    Clear shopping cart
                </button>
            </div>
            <CartTotals />
        </div>
    )
}

export default CartContent
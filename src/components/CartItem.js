import React from 'react'
import { useCartContext } from '../contexts/cart_context'
import { formatPrice } from '../utils/helper'
import {AmountButtons} from '../components'
import icon from '../utils/icon'

const {FaTrash}=icon


const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    return (
        <div className='grid grid-cols-200auto grid-rows-1 gap-8 md:grid-cols-4x1 justify-center mb-12 items-center'>
            <div className='grid grid-rows-1 grid-cols-2 md:grid-cols-1 lg:grid-cols-100-200 items-center text-left gap-4'>
                <img src={image} alt={name} className='w-[75px] md:w-[100px] h-[75px] md:h-[100px] block rounded-xl object-cover'/>
                <div>
                    <h4 className="text-md lg:text-xl lg:pt-6">{name}</h4>
                    <p  className="text-sm lg:text-md w-full text-left flex justify-start items-center">
                        Color:
                        <span style={{ background: color }} className='inline-block w-2 h-2 bg-red-500 ml-2 rounded-xl'></span>
                    </p>
                    <h4 className="text-md lg:text-xl lg:pt-6 font-normal lg:hidden">{formatPrice(price)}</h4>
                </div>
            </div>
            <h4 className="text-md md:text-xl hidden lg:block">{formatPrice(price)}</h4>
            <div className='hidden md:block'>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            </div>
            <h4 className="text-md md:text-xl hidden md:block">{formatPrice(price * amount)}</h4>
            <button className='btn btn-neutral' onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem
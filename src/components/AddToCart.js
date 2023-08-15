import React, { useState } from 'react'
import { useCartContext } from '../contexts/cart_context'
import icon from '../utils/icon'
import { Link } from 'react-router-dom'
import {AmountButtons} from '../components'

const { GoCheck } = icon

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext()
    const { id, stock, colors } = product
    const [mainColor, setMainColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }
    return (
        <div>
            <div className='flex  items-center justify-start'>
                <span className="py-2 text-md md:text-lg w-full mx-auto px-4 font-semibold">Colors: </span>
                <div className='flex gap-2 items-center'>
                    {colors.map((color, index) => {
                        return (
                            <button
                                key={index}
                                style={{ background: color }}
                                className={`${mainColor === color ? 'h-6 w-6 rounded-full grid place-items-center text-white' : 'w-6 h-6 rounded-full'
                                    }`}
                                onClick={() => setMainColor(color)}
                            >
                                {mainColor === color ? <GoCheck /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='px-6'>
                <AmountButtons
                    increase={increase}
                    decrease={decrease}
                    amount={amount}
                />
                <Link to='/cart' className='btn btn-neutral ml-6' onClick={() => addToCart(id, mainColor, amount, product)}>
                    Add to cart
                </Link>
            </div>
        </div>
    )
}

export default AddToCart
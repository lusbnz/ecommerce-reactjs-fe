import React from 'react'

const CartColumns = () => {
    return (
        <div className='hidden lg:block'>
            <div className='grid grid-cols-316 justify-center gap-4'>
                <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Item</h4>
                <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Price</h4>
                <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Quantity</h4>
                <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Subtotal</h4>
                <span className='w-8 h-8'></span>
            </div>
            <hr className='mt-4 mb-12'/>
        </div>
    )
}

export default CartColumns
import React from 'react'
import icon from '../utils/icon'

const {FaMinus,FaPlus}=icon

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='p-6 flex gap-4 items-center'>
      <button type='button'  onClick={decrease}>
        <FaMinus size={16}/>
      </button>
      <h3 className="text-xl md:text-2xl">{amount}</h3>
      <button type='button'  onClick={increase}>
        <FaPlus size={16}/>
      </button>
    </div>
  )
}

export default AmountButtons
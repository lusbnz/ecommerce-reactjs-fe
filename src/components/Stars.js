import React from 'react'
import icon from '../utils/icon'

const { BsStarFill, BsStarHalf, BsStar } = icon

const Stars = ({ stars, reviews }) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index}>
                {stars > number ? (
                    <BsStarFill />
                ) : stars > index ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        )
    })
    return (
        <div className='flex flex-col md:flex-row items-center pt-4'>
            <div className='flex gap-1 text-yellow-500'>{tempStars}</div>
            <p className="py-2 text-sm md:text-md w-full mx-auto px-4">({reviews} customer reviews)</p>
        </div>
    )
}

export default Stars
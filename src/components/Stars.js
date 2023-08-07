import React from "react";
import icon from "../utils/icon"
const { IoIosStarOutline, IoIosStarHalf, IoIosStar } = icon

const Stars = ({ stars, reviews }) => {
    const tmpStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span classname="text-drk mr-1" key={index}>
            {
                stars > number ? (
                    <IoIosStar size={16} />
                ) : stars > index ? (
                    <IoIosStarHalf size={16} />
                ) : (
                    <IoIosStarOutline size={16} />
                )
            }
            </span >
        )
    })

    return (
        <div classname="mb-2">
            <div classname="star">{tmpStars}</div>
            <p classname="reviews ml-2 mb-0">({reviews} Customer reviews)</p>
        </div>
    )
}

export default Stars
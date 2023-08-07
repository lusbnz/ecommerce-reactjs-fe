import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/tool"

const Product = ({ image, name, price, id }) => {
    return (
        <div className="relative rounded-lg items-center">
            <div>
                <Link to={`/products/${id}`} className="link">
                    <img src={image} alt={name} className="h-[400px] w-[400px] object-cover block rounded-xl hover:opacity-50" />
                </Link>
            </div>
            <div className="mt-4 flex justify-between items-center mb-0 text-lgt p-2">
                <h3 className="font-normal text-[16px]">{name}</h3>
                <p>{formatPrice(price)}</p>
            </div>
        </div>
    )
}

export default Product
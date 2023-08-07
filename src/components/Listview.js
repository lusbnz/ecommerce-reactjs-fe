import React from "react";
import { formatPrice } from "../utils/tool"
import { Link } from "react-router-dom";

const Listview = ({ products }) => {
    return (
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {products.map((product) => {
                return (
                    <article
                        key={product.id}
                    >
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="block w-[300px] h-[200px] object-cover rounded-xl mb-4"
                        />
                        <div>
                            <h4 className="mb-2 font-normal text-[16px] text-drk">{product.name}</h4>
                            <h5 className='price mb-2 text-pri font-normal text-[14px]'>{formatPrice(product.price)}</h5>
                            <p className="max-w-[80%] font-light text-[12px] text-drk pb-4">{product.description.substring(0, 150)}...</p>
                            <Link to={`/Products/${product.id}`}>
                                <button className="capitalize text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk py-2 px-4">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Listview
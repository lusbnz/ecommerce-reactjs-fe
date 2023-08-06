import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({title, product}) => {
    <div className="bg-sec w-full min-h-[20vh] flex items-center">
        <h3 className="font-normal text-[16px] text-pri"> 
            <Link to='/' className="text-drk">
                Home
            </Link>
            {product && 
                <Link to='/products' className="text-drk">
                    / Products
                </Link>}
            / {title}
        </h3>
    </div>
}

export default PageHero
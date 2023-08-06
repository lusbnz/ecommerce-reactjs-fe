import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
    return (
        <div className="bg-sec mt-8 pl-16 p-8 w-full min-h-[10vh] flex items-center">
            <h3 className="font-normal text-[24px] text-lgt">
                <Link to='/' className="text-drk ">
                    Home <tab/>
                </Link>
                / {title}
                {product &&
                    <Link to='/products' className="text-drk">
                        / Products
                    </Link>}
            </h3>
        </div>
    )
}

export default PageHero
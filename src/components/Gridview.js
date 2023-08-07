import React from "react";
import {Product} from "../components"

const Gridview = ({products}) => {
    return (
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
            {products.map((product)=>{
                return <Product key={product.id} {...product}/>
            })}
        </div>
    )
}

export default Gridview
import React from "react";
import { PageHero, Sort } from "../components"
import { Filter, ProductLists } from "../components";


const Products = () => {
    return (
        <div>
            <PageHero title='Product' />
            <div className="page grid gap-y-12 gap-x-6 my-14 p-8 mx-auto md:grid-cols-300">
                <Filter />
                <div>
                    <Sort />
                    <ProductLists />
                </div>
            </div>
        </div>
    )
}

export default Products
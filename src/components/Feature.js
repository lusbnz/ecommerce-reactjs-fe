import React from "react";
import { useProductsContext } from "../contexts/products_context";
import { Loading, Product } from "../components"
import { Error } from "../pages"
import { Link } from "react-router-dom";

const Feature = () => {
    const {
        products_loading: loading,
        products_error: error,
        featured_products: featured,
    } = useProductsContext()
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <div className="bg-pri p-8 pb-12">
            <div className="title font-semibold text-[24px] text-lgt">
                <h2>Featured products</h2>
            </div>
            <div className="featured my-8 p-2 mx-auto grid gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {featured.slice(0, 3).map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
            <Link to='/products'>
                <button className="capitalize font-semibold text-[16px] text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk p-2">
                    All products
                </button>
            </Link>
        </div>
    )
}

export default Feature
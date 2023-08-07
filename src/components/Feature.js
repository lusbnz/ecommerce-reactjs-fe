import React, { useEffect } from "react";
import { useProductsContext } from "../contexts/products_context";
import { Loading, Product } from "../components"
import { Error } from "../pages"
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Feature = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
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
            <div data-aos="fade-right" className="title font-semibold text-[24px] text-lgt">
                <h2>Featured products</h2>
            </div>
            <div data-aos='zoom-in' className="featured my-8 p-2 mx-auto grid gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3">
                {featured.slice(0, 3).map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
            <Link to='/products'>
                <button data-aos="fade-right" className="capitalize font-semibold text-[16px] text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk p-2">
                    All products
                </button>
            </Link>
        </div>
    )
}

export default Feature
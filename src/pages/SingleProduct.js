import React, { useEffect } from "react";
import { Loading, PageHero, ProductImages, Stars } from "../components"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Error } from "../pages"
import { formatPrice } from "../utils/tool";
import { useProductsContext } from "../contexts/products_context";
import { single_product_url as url } from "../utils/data"

const SingleProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct,
    } = useProductsContext();
    useEffect(() => {
        fetchSingleProduct(`${url}${id}`);
    }, [id]);
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [error]);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    const {
        name, price, description, stock, stars, reviews, id: sku, company, images,
    } = product
    return (
        <div>
            <PageHero title={name} product />
            <div className="p-8">
                <Link to='/products'>
                    <button className="capitalize text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk p-4">
                        Back to products
                    </button>
                </Link>
                <div className="product grid gap-16 mt-8 grid-cols-1 items-center">
                    <ProductImages images={images} />
                    <div className="content">
                        <h2 className="font-semibold text-[24px] text-pri">{name}</h2>
                        <Stars stars={stars} reviews={reviews}/>
                        <h5 className="price text-pri font-normal text-[16px]">{formatPrice(price)}</h5>
                        <p className="desc font-light text-[12px] text-drk w-[80%]">{description}</p>
                        <p className="info capitalize w-[300px] flex">
                            <span className="font-semibold w-[100px]">Available :</span>
                            {stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                        <p className="info capitalize w-[300px] flex">
                            <span className="font-semibold w-[100px]">SKU: </span>
                            {sku}
                        </p>
                        <p className="info capitalize w-[300px] flex">
                            <span className="font-semibold w-[100px]">Brand: </span>
                            {company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
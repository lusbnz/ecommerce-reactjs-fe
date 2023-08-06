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
            <div>
                <Link to='/products'>
                    <button>
                        Back to products
                    </button>
                </Link>
                <div className="product">
                    <ProductImages images={images} />
                    <div className="content">
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="desc">{description}</p>
                        <p className="info">
                            <span>Available :</span>
                            {stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                        <p className="info">
                            <span>SKU: </span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Brand: </span>
                            {company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
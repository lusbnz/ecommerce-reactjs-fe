import React, { useEffect } from 'react'
import { Loading, PageHero, ProductImages, Stars, AddToCart } from '../components'
import { Error } from '../pages'
import { useProductsContext } from '../contexts/products_context'
import { single_products_url as url } from '../utils/constant'
import { formatPrice } from '../utils/helper'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product

  return (
    <div>
      <PageHero title='Products' product={name} />
      <div className='md:p-12 lg:p-24'>
        <Link to='/products' className='btn btn-ghost'>
          Back to products
        </Link>
        <div className='pt-12 grid grid-cols-1 lg:grid-cols-2'>
          <ProductImages images={images} />
          <div className='content p-8'>
            <h2 className="text-4xl md:text-6xl font-semibold">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h4 className='text-md md:text-xl lg:pt-6 font-semibold'>{formatPrice(price)}</h4>
            <p className="py-2 text-sm md:text-md w-full mx-auto px-4">{description}</p>
            <p className="py-2 text-sm md:text-md w-full mx-auto px-4">
              <span className='font-semibold'>Available: </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className="py-2 text-sm md:text-md w-full mx-auto px-4">
              <span className='font-semibold'>SKU: </span>
              {sku}
            </p>
            <p className="py-2 text-sm md:text-md w-full mx-auto px-4">
              <span className='font-semibold'>Brand: </span>
              {company}
            </p>
            <hr/>
            {stock > 0 && <AddToCart product={product}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
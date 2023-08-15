import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../contexts/products_context'
import { Loading, Product } from '../components'
import { Error } from '../pages'
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
    <div className='flex flex-col items-center justify-center py-12'>
      <h3 data-aos='fade-down' className="text-2xl md:text-4xl px-4 text-center font-semibold">Featured products</h3>
      <div data-aos='zoom-in' className='featured grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn btn-neutral'>
        All products
      </Link>
    </div>
  )
}

export default Feature
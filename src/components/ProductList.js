import React from 'react'
import { useFilterContext } from '../contexts/filter_context'
import {ListView, GridView} from '../components'

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h4 className="text-md md:text-xl lg:pt-6 font-semibold">
        Sorry, no products matched your search.
      </h4>
    )
  }

  if(grid_view === false){
    return <ListView products={products}/>
  }
  return <GridView products={products}/>
}

export default ProductList
import React from 'react'
import { Filters, PageHero, ProductList, Sort } from '../components'

const Products = () => {
  return (
    <>
      <PageHero title='Products'/>
      <div className='products grid grid-cols-1 md:grid-cols-200 gap-4 md:p-12 lg:p-24'>
        <Filters />
        <div>
          <Sort/>
          <ProductList/>
        </div>
      </div>
    </>
  )
}

export default Products
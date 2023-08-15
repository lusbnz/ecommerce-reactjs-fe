import React from 'react'
import { useFilterContext } from '../contexts/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helper'
import icon from '../utils/icon'

const { GoCheck } = icon

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <div className='p-2'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control hidden md:block'>
          <input
            type="text"
            name='text'
            value={text}
            placeholder="Search"
            onChange={updateFilters}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className='form-control'>
          <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Category</h4>
          <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 place-items-start'>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type='button'
                  name='category'
                  className={`${category === c.toLowerCase() ? 'min-w-[40px] text-start px-1 border-b-neutral border-b-2' : 'min-w-[40px] px-1 text-start'
                    }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <div className='form-control'>
          <h4 className="text-md md:text-xl lg:pt-6 lg:pb-2 font-semibold">Company</h4>
          <select
            name='company'
            value={company}
            onChange={updateFilters}
            className="select select-accent w-full max-w-xs select-sm">
            {companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              )
            })}
          </select>
        </div>

        <div className='form-control'>
          <h4 className="text-md md:text-xl lg:pt-6 lg:pb-2 font-semibold">Colors</h4>
          <div className='colors flex gap-2 items-center'>
            {colors.map((c, index) => {
              if (c === 'all') {
                return (
                  <button
                    key={index}
                    name='color'
                    onClick={updateFilters}
                    data-color='all'
                    className={`${color === 'all' ? 'btn btn-xs btn-neutral btn-outline' : 'btn btn-xs btn-ghost'
                      }`}
                  >
                    all
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  name='color'
                  style={{ background: c }}
                  className={`${color === c ? ' h-4 w-4 rounded-full' : 'h-4 w-4 rounded-full'
                    }`}
                  data-color={c}
                  onClick={updateFilters}
                >
                  {color === c ? <GoCheck /> : null}
                  </button>
              )
            })}
          </div>
        </div>

        <div className='form-control'>
          <h4 className="text-md md:text-xl lg:pt-6 font-semibold">Price</h4>
          <p className="py-2 text-sm md:text-md w-full mx-auto px-4">{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
            className='range range-xs'
          />
        </div>

        <div className='form-control flex flex-row pb-6 justify-start items-end'>
          <h4 className="text-md md:text-xl pt-6 font-semibold">Free shipping</h4>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={updateFilters}
            className='checkbox'
          />
        </div>

      </form>
      <button type='button' className='btn btn-ghost btn-outline btn-sm' onClick={clearFilters}>
        Clear filters
      </button>
    </div>
  )
}

export default Filters
import React from 'react'
import { useFilterContext } from '../contexts/filter_context'
import icon from '../utils/icon'

const {MdGridOn,MdList} = icon

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <div className='grid grid-cols-3xauto mb-8 items-center gap-8'>
      <div className='grid grid-cols-2 gap-2'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'border border-neutral h-6 w-6 flex items-center justify-center cursor-pointer' : 'bg-transparent h-6 w-6 flex items-center justify-center cursor-pointer'}`}
        >
          <MdGridOn/>
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'border border-neutral h-6 w-6 flex items-center justify-center cursor-pointer' : 'bg-transparent h-6 w-6 flex items-center justify-center cursor-pointer'}`}
        >
          <MdList/>
        </button>
      </div>
      <p  className="py-2 text-sm md:text-md w-full mx-auto hidden md:block">{products.length} products found</p>
      <hr />
      <form className='flex gap-2 items-center'>
        <p  className="py-2 text-sm md:text-md w-full mx-auto  hidden md:block">Sort by</p>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className="select select-accent max-w-xs select-sm"
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
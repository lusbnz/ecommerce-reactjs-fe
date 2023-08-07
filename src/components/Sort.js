import React from "react";
import { useFilterContext } from "../contexts/filter_context"
import icon from "../utils/icon";

const { MdGridOn, MdList } = icon


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
        <div className="grid items-center mb-8 grid-cols-1 md:grid-cols-3xauto gap-2 md:gap-8">
            <div className="container w-[50px] grid grid-cols-2 gap-2">
                <button
                    onClick={setGridView}
                    className={`${grid_view ? 'bg-drk border boder-pri text-lgt h-6 w-6 flex items-center justify-center cursor-pointer' : 'bg-transparent border boder-pri text-drk h-6 w-6 flex items-center justify-center cursor-pointer'}`}
                >
                    <MdGridOn />
                </button>
                <button
                    onClick={setListView}
                    className={`${!grid_view ? 'bg-drk border boder-pri text-lgt h-6 w-6 flex items-center justify-center cursor-pointer' : 'bg-transparent border boder-pri text-drk h-6 w-6 flex items-center justify-center cursor-pointer'}`}
                >
                    <MdList />
                </button>
            </div>
            <p className="mb-0 capitalize font-light text-[14px] text-drk">{products.length} Products found</p>
            <form>
                <label htmlFor="sort" className="inline-block mr-2 text-[14px] font-light text-drk">Sort by</label>
                <select
                    name='sort'
                    id='sort'
                    value={sort}
                    onChange={updateSort}
                    className='sort-input border border-transparent capitalize p-2 text-[14px]'
                >
                    <option value='price-lowest'>Price (lowest)</option>
                    <option value='price-highest'>Price (highest)</option>
                    <option value='name-a'>Name (a - z)</option>
                    <option value='name-z'>Name (z - a)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort
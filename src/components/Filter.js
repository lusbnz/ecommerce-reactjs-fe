import React from "react";
import { useFilterContext } from "../contexts/filter_context"
import { formatPrice, getUniqueValues } from "../utils/tool"

const Filter = () => {
    const {
        filters: {
            text, category, company, min_price, price, max_price, shipping
        },
        updateFilters, clearFilters, all_products
    } = useFilterContext()
    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')

    return (
        <div className="content">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-control mb-2 md:mb-6">
                    <input
                        type="text"
                        name="text"
                        value={text}
                        placeholder="search"
                        onChange={updateFilters}
                        className="input p-2 bg-sec rounded-xl border border-none text-lgt placeholder:text-lgt placeholder:capitalize"
                    />
                </div>
                <div className="form-control mb-2 md:mb-6">
                    <h4 className="mb-2 font-semibold text-[16px] md:text-[24px] text-drk">Category</h4>
                    <div>
                        {categories.map((c, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={updateFilters}
                                    type="button"
                                    name="category"
                                    className={
                                        `${category === c.toLowerCase() ? 'min-w-[40px] border border-pri p-1' : 'min-w-[40px] p-1 border boder-sec'
                                        }`
                                    }
                                >
                                    {c}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="form-control mb-2 md:mb-6 grid grid-cols-2 md:grid-cols-1 place-items-start items-center">
                    <h4 className="mb-2 font-semibold text-[16px] md:text-[24px] text-drk">Commpany</h4>
                    <select
                        name="company"
                        value={company}
                        onChange={updateFilters}
                        className="company bg-lgt rounded-xl border border-pri p-2"
                    >
                        {companies.map((c, index) => {
                            return (
                                <option key={index} value={c}>
                                    {c}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-control mb-2 md:mb-6 grid grid-cols-3 md:grid-cols-1 place-items-start items-center'>
                    <h4 className="mb-2 font-semibold text-[16px] md:text-[24px] text-drk">Price</h4>
                    <p className='price mb-1'>{formatPrice(price)}</p>
                    <input
                        type='range'
                        name='price'
                        onChange={updateFilters}
                        min={min_price}
                        max={max_price}
                        value={price}
                        className="bg-sec cursor-pointer rounded-lg"
                    />
                </div>
                <div className='form-control shipping grid grid-cols-2 place-items-start items-center capitalize mb-2 md:mb-6'>
                    <label htmlFor='shipping'>free shipping</label>
                    <input
                        type='checkbox'
                        name='shipping'
                        id='shipping'
                        checked={shipping}
                        onChange={updateFilters}
                    />
                </div>
            </form >
            <button type='button' className='clear-button capitalize text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk px-4 py-2' onClick={clearFilters}>
                clear filters
            </button>
        </div >
    )
}

export default Filter
import React from 'react';

const Filter=({product,size,sort,sortProducts,filterProducts})=>{
    return(

        <div className='filter'>
            <div className="filter-result pl-3"><span style={{fontWeight:900}}>{product}</span> Products</div>
            <div className='filter-sort'>Order
                <select value={sort} onChange={sortProducts} className='ml-2'>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">Filter
                <select value={size} onChange={filterProducts} className='ml-2'>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div></div>
        </div>

    )
}
export default Filter;
import React,{useContext} from 'react';
import {AppContext} from '../AppContext';

const Filter=()=>{

    const {
        products,
        size,
        sort,
        sortProducts,
        filterProducts
    } = useContext(AppContext);





return(

<div  className='filter'>
    <div style={{fontWeight:900 , fontSize:20+'px'}} className="filter-result"><span className='mr-2'>{products.length}</span>Products</div>
    <div className="filter-sort">
       <b>Order</b> {" "}
        <select value={sort} onChange={sortProducts}>
            <option>Latest</option>
            <option value='highest'>Highest</option>
            <option value='lowest'>Lowest</option>
        </select>
    </div>
    <div className="filter-size">
    <b>Filter</b> {" "}
        <select value={size} onChange={filterProducts}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    </div>
    <div className='filter-space'></div>
</div>

)
}
export default Filter;
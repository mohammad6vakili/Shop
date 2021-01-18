import React,{useContext,useEffect} from 'react';
import data from '../data.json';
import Filter from './Filter';
import Product from './products';
import Cart from './Cart';
import {AppContext} from '../AppContext';

const Shop =()=>{
                
// Import Store from Context    
    const {
        setProducts,
        products
      } = useContext(AppContext);

//Show products for first time      
      useEffect(() => {
        getData()
        }, []);

//Move data from data.json to Products State        
      const getData=()=>{
        setProducts(data.products)
        console.log(products.length);
      }
    


    return(
        <React.Fragment>
            <Filter />
    
    
            <div className='div container-fluid row'>
    
                <div className='content col-9'>
                    <Product />
                </div>
    
                <div className='sidebar col-3 mt-3'>
                    <Cart />
    
                </div>
    
            </div>
        </React.Fragment>
    )
}
export default Shop;
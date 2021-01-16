import React from 'react';
import Filter from './Filter';
import Product from './products';
import Cart from './Cart';

const Shop =({cartItems,
            removeFromCart,
            showCheckout,
            showCheckoutForm,
            createOrder,
            inputHandler,
            products,
            addToCart,
            openModal,
            closeModal,
            modal,
            size,
            sort,
            sortProducts,
            filterProducts,
        })=>{
                
    return(
        <React.Fragment>
            <Filter 
            count={products.length}
            size={size}
            sort={sort}
            sortProducts={sortProducts}
            filterProducts={filterProducts}
            />
    
    
            <div className='div container-fluid row'>
    
                <div className='content col-9'>
                    <Product
                    products={products}
                    addToCart={addToCart}
                    openModal={openModal}
                    closeModal={closeModal}
                    modal={modal}
                    />
                </div>
    
                <div className='sidebar col-3 mt-3'>
                    <Cart 
                    removeFromCart={removeFromCart} 
                    cartItems={cartItems} 
                    showCheckout={showCheckout} 
                    showCheckoutForm={showCheckoutForm}
                    createOrder={createOrder}
                    inputHandler={inputHandler}
                    />
    
                </div>
    
            </div>
        </React.Fragment>
    )
}
export default Shop;
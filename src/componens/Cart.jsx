import React from 'react';

const Cart=({cartItems,removeFromCart,showCheckout,showCheckoutForm,createOrder,inputHandler})=>{

    return(
        <div className='cart'>
            
                    {cartItems.length === 0 ? 
                    <div className='cart-header'>Cart is empty</div>
                    : <div className='cart-header'>You have {cartItems.length} item in the cart</div>       
                    }

                    <div className='cart-body'>

                        {cartItems.map((item)=>(
                            <ul key={item.id}>
                                <li className='cart-item container' >
                                  <div className='cart-item-image'> <img src={item.image} alt="item"/> </div>
                                  <div className='cart-item-right'>
                                      <div style={{fontSize:13+'px'}} className='p-1'>{item.title}</div>
                                      <div className='w-100 d-flex justify-content-around pr-2'>
                                         <span style={{fontSize:16+'px'}} className='d-flex align-items-center'> $ {item.price} x {item.count}</span>
                                      <button onClick={()=>removeFromCart(item)} className='cart-item-remove'>Remove</button>
                                      </div>                                        
                                  </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                    {cartItems.length!==0 && 
                    <div>
                        <div className='payment-section'>
                            <div className='total'>
                                <div>
                                    Total: {"  $ "}
                                    { cartItems.reduce((a,c)=>a+c.price*c.count,0).toFixed(2)}
                                </div>
                                <button onClick={showCheckoutForm} className='payment-button'>Proceed</button>
                            </div>
                        </div>
                        {showCheckout && 
                            <form className='mt-5' onSubmit={createOrder}>
                                <ul className='form-container'>
                                    <li>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' required onChange={inputHandler}/>
                                    </li>
                                    <li>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' required onChange={inputHandler}/>
                                    </li>
                                    <li>
                                        <label htmlFor="address">Address</label>
                                        <input type="text" name='address' required onChange={inputHandler}/>
                                    </li>
                                    <li>
                                        <button className='checkout-button' type='submit'>Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        }
                    </div>
                    }
                    
         </div>
       
    )

}
export default Cart;
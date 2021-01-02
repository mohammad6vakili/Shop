import React from 'react';

const Cart=({cartItems,removeFromCart})=>{

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
                    <div className='payment-section'>
                        <div className='total'>
                            <div>
                                Total: {"  $ "}
                                { cartItems.reduce((a,c)=>a+c.price*c.count,0).toFixed(2)}
                            </div>
                            <button className='payment-button'>Proceed</button>
                        </div>
                    </div>
                    }
           
         </div>
       
    )

}
export default Cart;
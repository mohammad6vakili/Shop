import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';
import { AppContext } from '../AppContext';

const Cart=()=>{

//Import State from Context    
    const {
        cartItems,
        removeFromCart,
        showCheckout,
        showCheckoutForm,
        createOrder,
        inputHandler,
        getName,
        name,
        getEmail,
        email,
        getAddress,
        address,
        
    } = useContext(AppContext)

    
    return(
        <div className='cart'>
            
                    {cartItems.length === 0 ? 
                    <div className='cart-header'>Cart is empty</div>
                    : <div className='cart-header'>You have {cartItems.length} item in the cart</div>       
                    }

                    <div className='cart-body'>

                        
                            <Fade left cascade>
                            <ul >
                            {cartItems.map((item)=>(
                                <li key={item.id} className='cart-item container mt-1 mb-3' >
                                  <div className='cart-item-image'> <img src={item.image} alt="item"/> </div>
                                  <div className='cart-item-right'>
                                      <div style={{fontSize:13+'px'}} className='p-1'>{item.title}</div>
                                      <div className='w-100 d-flex justify-content-around pr-2'>
                                         <span style={{fontSize:16+'px'}} className='d-flex align-items-center'> $ {item.price} x {item.count}</span>
                                      <button onClick={()=>removeFromCart(item)} className='cart-item-remove'>Remove</button>
                                      </div>                                        
                                  </div>
                                </li>))}
                            </ul>
                            </Fade>
                      
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
                        <Fade right cascade>
                        {showCheckout && 
                            <form className='mt-5' onSubmit={createOrder}>
                                <ul className='form-container'>
                                    <li>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' value={name} onChange={getName} required/>
                                    </li>
                                    <li>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' value={email} onChange={getEmail} required/>
                                    </li>
                                    <li>
                                        <label htmlFor="address">Address</label>
                                        <input type="text" name='address' value={address} onChange={getAddress} required/>
                                    </li>
                                    <li>
                                        <button className='checkout-button' type='submit'>Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        }
                        </Fade>
                    </div>
                    }
                    
         </div>
       
    )

}
export default Cart;
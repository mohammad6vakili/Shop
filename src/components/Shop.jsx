import React,{useContext,useEffect} from 'react';
import data from '../data.json';
import Filter from './Filter';
import Product from './products';
import Cart from './Cart';
import Modal from 'react-modal';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';
import {AppContext} from '../AppContext';

const Shop =()=>{
                
// Import Store from Context    
    const {
        setProducts ,
        products ,
        order , 
        closeOrder ,
        name ,
        email ,
        address ,
        cartItems
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
    
    
            <div className='shop-container container-fluid'>

            {order && 
                        <Modal className='final-modal' isOpen={true} onRequestClose={closeOrder}>
                        <Fade top> 
                            <div className='d-flex justify-content-end mb-1'><span style={{cursor:'pointer',fontSize:32+'px'}} onClick={closeOrder}>X</span></div>
                            <h1 className='order-modal-message mb-5'>successful</h1>
                            <div className='d-flex justify-content-between mb-4 pr-3 pl-3  '><span>Name :</span> <strong>{name}</strong></div>
                            <div className='d-flex justify-content-between mb-4 pr-3 pl-3 '><span>Email :</span> <strong>{email}</strong></div>
                            <div className='d-flex justify-content-between mb-4 pr-3 pl-3 '><span>Address :</span> <strong>{address}</strong></div>
                            <div className='d-flex justify-content-between mb-4 pr-3 pl-3 final-modal-div'><span>Date :</span> <strong>{Date()}</strong></div>
                            <div className='d-flex justify-content-between mb-5 pr-3 pl-3 '><span>Total :</span> <strong>{"  $  "}{ cartItems.reduce((a,c)=>a+c.price*c.count,0).toFixed(2)}</strong></div>
                            <div className='order-modal-item'>
                                <h3>Items :</h3>
                                <div>{cartItems.map((item)=>(
                                    <p className='d-flex justify-content-between'> <span style={{color:'red'}}>{item.count} x {item.title}</span><span style={{fontWeight:'bold',color:'royalblue'}}>{"$"} {item.price} x {item.count}</span></p>
                                ))}</div>
                            </div>
                        </Fade>
                        </Modal>
            }

                <div className='content'>
                    <Product />
                </div>
    
                <div className='sidebar mt-3'>
                    <Cart />
    
                </div>

    
            </div>
        </React.Fragment>
    )
}
export default Shop;
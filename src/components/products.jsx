import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {AppContext} from '../AppContext';


const Product =()=>{

    const{
        products,
        addToCart,
        openModal,
        closeModal,
        modal
    } = useContext(AppContext)

    return(
            <div>
            <Fade bottom cascade>
                <ul className='products '>
                    {products.map((product)=>(
                        <li className=' col-4-lg' key={product.id}>
                            <div className='product'>
                                <a onClick={()=>openModal(product)}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price pb-2 container-fluid">
                                    <div className='container'>${product.price}</div>
                                    <button onClick={()=>addToCart(product)} className='btn btn-warning btn-sm add-btn'>Add to Card</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Fade>
            {modal && 
                <Modal style={{overlay:{backgroundColor:'rgba(0, 0, 0, 0.781)'}}} isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                        <div className='close-button-container'>
                            <button onClick={closeModal}>X</button>
                        </div>
                        <div className='product-details'>
                            <img src={modal.product.image} alt={modal.product.title}/>
                            <div className='product-details-description'>
                                <p>
                                    <strong>{modal.product.title}</strong>
                                </p>
                                <p>
                                    {modal.product.description}
                                </p>
                                <p>
                                    Available Sizes : {" "}
                                    {modal.product.availableSizes.map((x)=>(
                                        <span>
                                            {"  "}
                                            <button className='btn btn-secondary'>{x}</button>
                                        </span>
                                    ))}
                                </p>
                                <div className='product-price'>
                                    <div>$ {modal.product.price}</div>
                                    <button  className='modal-add-button'
                                    onClick={()=> {
                                    addToCart(modal.product);
                                    closeModal();
                                    }}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            }
        </div>
    );
}
export default Product;
import React from 'react';


const Product =({products,addToCart})=>{


    return(

        <ul className='products '>
            {products.map((product)=>(
                <li className=' col-4-lg' key={product.id}>
                    <div className='product'>
                        <a href="/">
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


    )

}
export default Product;
import React from 'react';


const Product =({products})=>{

    return(

        <ul className='products'>
            {products.map((product)=>(
                <li key={product.id}>
                    <div className='product'>
                        <a href="#">
                            <img src={product.image} alt={product.title}/>
                            <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                            <div>${product.price}</div>
                            <button className='btn btn-warning ml-3'>Add to Card</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>


    )

}
export default Product;
import React,{useState,useEffect} from 'react';
import './index.css';
import Product from './componens/products';
import data from './data.json';
import Filter from './componens/Filter';
import Cart from './componens/Cart';



const App=()=>{



  const [products , setProducts]=useState([]);
  const [size , setSize]=useState('');
  const [sort , setSort]=useState('');
  const [cartItems , setCartItems]=useState([]);




  useEffect(() => {
    getData()
    }, []);


const removeFromCart=(product)=>{
  const cartItem=cartItems.slice();
  setCartItems(
  cartItem.filter((item)=>item.id!==product.id)
  )

  
}



const addToCart=(product)=>{
  const cartItem=cartItems.slice();
  let alreadyInCart=false;
  cartItem.forEach((item)=>{
    if(item.id===product.id){
      item.count++;
      alreadyInCart=true;
    }
  });
  if(!alreadyInCart){
    cartItem.push({...product,count:1});
    
  }
  setCartItems(cartItem);
  
}



  const sortProducts=(e)=>{ 
    console.log(e.target.value);
    setSort(e.target.value);
    setProducts(products.slice().sort((a,b)=>(
        sort==='lowest' ? ((a.price>b.price)?1:-1):
        sort==='highest' ? ((a.price<b.price)?1:-1):
        ((a.id<b.id) ?1:-1)
    )))
  }

  const filterProducts=(e)=>{
    console.log(e.target.value);
    if(e.target.value===''){
      return   setSize(e.target.value) , setProducts(data.products)
    }else{
      return   setSize(e.target.value) , setProducts(data.products.filter((product)=>product.availableSizes.indexOf(e.target.value)>=0))
    }
  }
  

  const getData=()=>{
    setProducts(data.products)
    console.log(products);
  }



  return(

    <div className='App'>

    <header className='header'>
      <a href='/'>Mohammad Shopping Card</a>
    </header>
  

  <main className='p-2 main'>


      <Filter 
      count={products.length}
      size={size}
      sort={sort}
      sortProducts={sortProducts}
      filterProducts={filterProducts}
      />


        <div className='div container-fluid row'>

            <div className='content col-9'>
              <Product products={products} addToCart={addToCart}/>
            </div>

            <div className='sidebar col-3 mt-3'>
              <Cart removeFromCart={removeFromCart} cartItems={cartItems}/>

            </div>

        </div>


  </main>


    <footer className='footer'>All Right Reserved.</footer>
  
  </div>

  )
}
export default App;


import React,{useState,useEffect} from 'react';
import './index.css';
import Product from './componens/products';
import data from './data.json';
import Filter from './componens/Filter';
import Cart from './componens/Cart';



const App=()=>{

        // States 
  const [products , setProducts]=useState([]);
  const [size , setSize]=useState('');
  const [sort , setSort]=useState('');
  const [cartItems , setCartItems]=useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
  const [showCheckout , setShowCheckout]=useState(false);
  const [name,setName]=useState('ali');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');

  

      // Getting data from data.json
  const getData=()=>{
    setProducts(data.products)
  }


      // useEffect for show at the first time 
  useEffect(() => {
    getData()
    }, []);


      // filtere products by their available size 
  const filterProducts=(e)=>{
      if(e.target.value===''){
        return   setSize(e.target.value) , setProducts(data.products)
      }else{
        return   setSize(e.target.value) , setProducts(data.products.filter((product)=>product.availableSizes.indexOf(e.target.value)>=0))
      }
  }


      // sort products 
  const sortProducts=(e)=>{ 
    setSort(e.target.value)
    setProducts(products.slice().sort((a,b)=>(
        sort==='lowest' ? ((a.price>b.price)?1:-1):
        sort==='highest' ? ((a.price<b.price)?1:-1):
        ((a.id<b.id) ?1:-1)
    )))
  }  


      // add products to shopping cart 
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
    localStorage.setItem('cartItems',JSON.stringify(cartItem))
  }



        // remove products from shopping cart 
  const removeFromCart=(product)=>{
    const cartItem=cartItems.slice();
    setCartItems(
    cartItem.filter((item)=>item.id!==product.id)
    );
    localStorage.setItem('cartItems',JSON.stringify(cartItem.filter((item)=>item.id!==product.id)))
  }

  

        // show checkout form afte clicking proceed button 
  const showCheckoutForm=()=>{
    setShowCheckout(true);

  }
  


  const inputHandler=()=>{

  }



  const createOrder=(e)=>{
    e.preventDefault();
    alert('You need to save order')
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
              <Product
              products={products}
              addToCart={addToCart}
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


  </main>


    <footer className='footer'>All Right Reserved.</footer>
  
  </div>

  )
}
export default App;


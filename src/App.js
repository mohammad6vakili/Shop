import React,{useState,useEffect} from 'react';
import './index.css';
import data from './data.json';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from 'react-router-dom';




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
  const [modal,setModal]=useState(null);

  

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
    alert('This is an unfinished project')
  }



  const openModal=(product)=>{
    setModal({product:product});
    console.log(modal);
  }



  const closeModal=()=>{
    setModal(null);
  }

  


  return(

    <div className='App'>
          <Router>
          <header className='header'>
            <ul className='nav-list'>
              <Zoom><Link to='/'><li id='first-nav-link' className='nav-link'>Shop</li></Link></Zoom>
              <Fade top>
              <li className='nav-link'><a href='https://github.com/mohammad6vakili/shopping-cart'>GitHub</a></li>
              <Link className='router-link' to='/contact'><li className='nav-link'>Contact</li></Link>
              <li className='nav-link ml-auto'>MohammadAli Vakilidoost</li>
              </Fade>
            </ul>
          </header>



          <main className='main'>
            <Switch>
              <Route 
              path='/' exact
              render={(props) => (
                <Shop
                      {...props}
                      count={products.length}
                      size={size}
                      sort={sort}
                      sortProducts={sortProducts}
                      filterProducts={filterProducts}    
                      products={products}
                      addToCart={addToCart}
                      openModal={openModal}
                      closeModal={closeModal}
                      modal={modal}
                      removeFromCart={removeFromCart} 
                      cartItems={cartItems} 
                      showCheckout={showCheckout} 
                      showCheckoutForm={showCheckoutForm}
                      createOrder={createOrder}
                      inputHandler={inputHandler} 
                    />
                  )}
                />

              <Route path="/contact" exact component={Contact} />


              </Switch> 
          </main>

          <footer className='footer'>All Right Reserved.</footer>
          </Router>
  </div>

  )
}
export default App;


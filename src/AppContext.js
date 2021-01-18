import React,{useState , createContext} from 'react';
import data from './data.json';


export const AppContext = createContext();


export const AppProvider =(props)=>{

// ------------------------------------Hooks-----------------------------------
  const [products , setProducts]=useState([]);
  const [size , setSize]=useState('');
  const [sort , setSort]=useState('');
  const [cartItems , setCartItems]=useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
  const [showCheckout , setShowCheckout]=useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [modal,setModal]=useState(null);

// ----------------filtere products by their available size -----------------
  const filterProducts=(e)=>{
      if(e.target.value===''){
        return   setSize(e.target.value) , setProducts(data.products)
      }else{
        return   setSize(e.target.value) , setProducts(data.products.filter((product)=>product.availableSizes.indexOf(e.target.value)>=0))
      }
  }

// ---------------------------sort products------------------------------
  const sortProducts=(e)=>{ 
    setSort(e.target.value)
    setProducts(products.slice().sort((a,b)=>(
        sort==='lowest' ? ((a.price>b.price)?1:-1):
        sort==='highest' ? ((a.price<b.price)?1:-1):
        ((a.id<b.id) ?1:-1)
    )))
  }  

// ---------------------------add products to shopping cart ----------------------------
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


// ------------------------------remove products from shopping cart ----------------------------
  const removeFromCart=(product)=>{
    const cartItem=cartItems.slice();
    setCartItems(
    cartItem.filter((item)=>item.id!==product.id)
    );
    localStorage.setItem('cartItems',JSON.stringify(cartItem.filter((item)=>item.id!==product.id)))
  }


// -------------------------show checkout form afte clicking proceed button --------------------------
  const showCheckoutForm=()=>{
    setShowCheckout(true);
  }
  
//--------------------------------------------Create Order--------------------------------------------
  const createOrder=(e)=>{
    e.preventDefault();
    alert('This is an unfinished project')
  }

//--------------------------------------------Open Modal Function-------------------------------------
  const openModal=(product)=>{
    setModal({product:product});
    console.log(modal);
  }

//-------------------------------------------Close Modal Function--------------------------------------
  const closeModal=()=>{
    setModal(null);
  }

//----------------------------------------Collect all passing States-----------------------------------  
  const value = {
    products,
    setProducts,
    size,
    setSize,
    sort,
    setSort,
    cartItems,
    setCartItems,
    showCheckout,
    setShowCheckout,
    modal,
    setModal,
    // getData,
    filterProducts,
    sortProducts,
    addToCart,
    removeFromCart,
    showCheckoutForm,
    createOrder,
    openModal,
    closeModal
  }

  
    return(
        <AppContext.Provider value={value}
        >
            
            {props.children}

        </AppContext.Provider>
    );
}

import React,{useState,useEffect} from 'react';
import './index.css';
import Product from './componens/products';
import data from './data.json';
import Filter from './componens/Filter';



const App=()=>{

  const [product , setProduct]=useState([]);
  const [size , setSize]=useState('');
  const [sort , setSort]=useState('');


  const sortProducts=(e)=>{ 
    console.log(e.target.value);
    setSort(e.target.value);
    setProduct(product.slice().sort((a,b)=>(
        sort==='lowest' ? ((a.price>b.price)?1:-1):
        sort==='highest' ? ((a.price<b.price)?1:-1):
        ((a.id<b.id) ?1:-1)
    )))
  }

  const filterProducts=(e)=>{
    console.log(e.target.value);
    if(e.target.value===''){
      return   setSize(e.target.value) , setProduct(data.products)
    }else{
      return   setSize(e.target.value) , setProduct(data.products.filter((product)=>product.availableSizes.indexOf(e.target.value)>=0))
    }
  }


  
  useEffect(() => {
    getData()
    }, []);

  const getData=()=>{
    setProduct(data.products)
    console.log(product);
  }


  return(

    <div className='App'>

    <header className='header'>
      <a href='/'>Mohammad Shopping Cart</a>
    </header>
  

  <main className='p-2 main'>


      <Filter 
      product={product.length}
      size={size}
      sort={sort}
      sortProducts={sortProducts}
      filterProducts={filterProducts}
      />


        <div className='div container-fluid row'>

            <div className='content col-9'>
              <Product product={product}/>
            </div>

            <div className='sidebar col-3 bg-warning mt-3'>
              sidebar
            </div>

        </div>


  </main>


    <footer onClick={getData} className='footer'>All Right Reserved.</footer>
  
  </div>

  )
}
export default App;

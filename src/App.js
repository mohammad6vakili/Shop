import React,{useState,useEffect} from 'react';
import './index.css';
import Product from './componens/products';
import data from './data.json';



const App=()=>{

  const [product , setProduct]=useState([]);
  
  useEffect(() => {
    getData()   
    }, [product]);

  const getData=()=>{
    setProduct(data.products);
    console.log(product);
  }


  return(

    <div className='App'>

    <header className='header'>
      <a href='/'>React Shopping Card</a>
    </header>
  
    <main className='main container-fluid row'>
        <div className='content col-9'>
          <Product products={product}/>
        </div>
        <div className='sidebar col-3 bg-warning'>
          sidebar
        </div>
    </main>
  
    <footer className='footer'>All Right Reserved.</footer>
  
  </div>

  )
}
export default App;

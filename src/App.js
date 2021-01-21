import React,{useContext,useEffect} from 'react';
import './index.css';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import {AppProvider} from './AppContext';




const App=()=>{


  return(
      <AppProvider>
          <div className='App'>
                <Router>
                  <header className='header'>
                    <ul className='nav-list'>
                      <Zoom><Link to='/'><li id='first-nav-link' className='nav-link'>Shop</li></Link></Zoom>
                      <Fade top>
                      <li  className='nav-link'><a href='https://github.com/mohammad6vakili/shopping-cart'>GitHub</a></li>
                      <Link id='router-link' to='/contact'><li className='nav-link'>Contact</li></Link>
                      <li className='nav-link nav-name ml-auto'>MohammadAli Vakilidoost</li>
                      </Fade>
                    </ul>
                  </header>

                  <main className='main'>
                    <Switch>

                        <Route path='/' exact component={Shop} />
                        <Route path="/contact" exact component={Contact} />
                        
                    </Switch> 
                  </main>

                  <footer className='footer'>Developed by :<b className='ml-2'><i> MohammadAli Vakilidoost </i></b></footer>
                </Router>
            </div>
        </AppProvider>
  )
}
export default App;
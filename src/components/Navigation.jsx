import React from 'react';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';



const Navigation =()=>{

    return(
            <ul className='nav-list'>
                <Zoom>
                <li>My Shop</li>
                </Zoom>
                <Fade top >
                <li><a href="https://github.com/mohammad6vakili">GitHub</a></li>
                <li>Contact</li>
                </Fade>
            </ul>
    )
}
export default Navigation;
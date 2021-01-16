import react from 'react';
import React from 'react';
import Zoom from 'react-reveal';
import Fade from 'react-reveal';

const Contact =()=>{
    return (
    <Zoom>
    <Fade left cascade>
    <div className='contact-wrapper'>
        <h2 className='mb-4'>Contact me four your jobs</h2>
        <div className='email'><span>Email Address:</span><span> mohammad6vakili@gmail.com</span></div>
        <div className='mobile'><span>PhoneNumber:</span><span>00989390624049</span></div>
        <div className='git'><a href="https://github.com/mohammad6vakili"> <span> Visit my <strong> <b> GitHub </b> </strong></span></a></div>
    </div>
    </Fade>
    </Zoom>
    )
}
export default Contact;
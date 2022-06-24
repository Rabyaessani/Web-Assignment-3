import React from 'react';

function Contact(){
    return(
        <div id='contact'>
           <h2>Send Us Mail</h2>
           <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com' />
            <a href='#'>Contact Us</a>
           </div>
        </div>
    )
}
export default Contact;
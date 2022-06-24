import React from 'react';

function About(props){
    return(
        <div id='about'>
            <div className='about-image'>
                 <img src={props.image} alt=''/>
            </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nam ducimus distinctio esse nobis dignissimos aperiam est optio delectus, nisi ullam molestiae, facere recusandae reprehenderit repudiandae illo, 
            nemo nulla quam?</p>
            <button>{props.button}</button>
        </div>
        </div>
    )
}
export default About
import React, { useEffect } from 'react';

function About()
{
    useEffect(() =>{
        document.title = "About";
    },[]);
    
    return(
        <div className="container">
            <h1>About Us</h1>
            <hr/>
        </div>
    );
}

export default About;
import React, { useEffect } from 'react';

function Projects()
{
    useEffect(() =>{
        document.title = "Projects";
    },[]);

    return(
        <div className="container">
            <h1>Our Projects</h1>
            <hr/>
        </div>
    );
}

export default Projects;
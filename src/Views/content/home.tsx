import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import User from '../../Models/User';

function Home(props:User)
{
    useEffect(() =>{
        document.title = "Home";
    },[]);


    return(
        <div className="container">
            <h1 id="WelcomeHeader">Welcome to our Site, {props.displayName}</h1>
            <hr/>

            <Link to = {"/about"}>
                <button className='btn btn-primary btn-large'>Learn about us!</button>
            </Link>
        </div>
        
    );
}

export default Home;
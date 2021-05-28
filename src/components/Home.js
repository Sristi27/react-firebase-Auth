import React from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';


function Home() {
    return (
        <div> 
            <ul>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><Link to="/signup"><button>Signup</button></Link></li>
            </ul>
        </div>
    )
}

export default Home

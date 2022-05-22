import React from "react";
import { Link } from "react-router-dom";


const Navbar =() =>
{
    return(
        <div>
            <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#item">Items</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            
            </ul>
            <button><Link to="/add">Create Table</Link></button>
            
          
        </div>

    );
}

export default Navbar;
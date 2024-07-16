import { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
function Navbar({profile1, mode}){
   



  
    
    return(
        <>
        <div className='navbar flex items-center sticky-top' style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
            <a className='text-xl text-blue-500 font-bold ml-24 logo border w-fit max-md:ml-9 max-sm:ml-6 max-sm:text-sm' href = "#"><Link to = '/'>Portfolio</Link></a>
            <div class="form-check form-switch border max-md:block max-md:absolute">
  <input className="form-check-input taxt-2xl" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={mode}/>{profile1 == 'white'?<i className="fa-solid fa-sun text-yellow-400"></i>:<i className="fa-solid fa-moon text-white"></i>}
             </div>
            <div className='navbar-item'>
                <ul type = "none">
                    <li>
                    <Link to = '/'>
                     Home
                    </Link>
                       
                    </li>
                    <li>
                    <Link to = '/About'>
                        About
                    </Link>
                    </li>
                    
                    <li>
                       <a href = "#projects">Projects</a>
                    </li>
                    <li>
                       <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
            <button className='btn  border '><a href = "#contact">Contact 
            Us</a>
            </button>
        </div>
       
        </>
    )
}
export default Navbar;
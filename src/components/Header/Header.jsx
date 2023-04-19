import React from 'react'
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css";

const Header = () =>{
    return(
        <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find book of your choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Expand your mind with every page turn. Discover the joy of reading and explore a world of books with our online library.  
                                 Find your favorite book with us. Your next great read is just a click away!</p>
                <Searchform />
            </div>
        </header>
            
        </div>
    )
}

export default Header
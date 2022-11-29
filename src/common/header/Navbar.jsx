import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    const[MobileMenu, setMobileMenu] = useState(false)
    return(
        <>
        <header className="header">
            <div className="container d_Flex">
             <div className="categories d_Flex">
            <span> <i class="fa fa-border-all"></i></span>
            <h4>Categories <i class="fa fa-chevron-down"></i></h4>
            </div>   
            <div className="navlink">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalise"} onClick={() => setMobileMenu(false)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Pages">Pages</Link>
                    </li>
                    <li>
                        <Link to="/vendor">Vendor Account</Link>
                    </li>
                    <li>
                        <Link to="/track">Track My Order</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    {MobileMenu ? <i class="fas fa-times close home-bth"></i> : 
                    <i class="fa fa-bars open"></i>}
                </button> */}
            </div>
            </div>

        </header>
        </>
    )
}

export default Navbar
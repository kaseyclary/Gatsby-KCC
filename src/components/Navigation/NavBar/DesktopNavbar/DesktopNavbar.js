import React from 'react'
import {Link} from 'gatsby'
import classes from '../DesktopNavbar/DesktopNavbar.module.css'

const desktopNavbar = () => (
    <div className={classes.Navbar}>
        <div className={classes.NavLogo}>
            <div className={classes.CheeseIcon} />
        </div>
        <ul className={classes.LinkList}>
            <li>
                <Link to='/' className={classes.NavLink}>Home</Link>
            </li>
            <li>
                <Link to='/FaQ' className={classes.NavLink}>FaQ</Link>
            </li>
            <li>
                <Link to='/Pricing' className={classes.NavLink}>Pricing</Link>
            </li>
            <li>
                <Link to='/Gallery' className={classes.NavLink}>Gallery</Link>
            </li>
            <li>
                <Link to='/Order' className={classes.NavLink}>Order</Link>
            </li>
        </ul>
    </div>
)

export default desktopNavbar;
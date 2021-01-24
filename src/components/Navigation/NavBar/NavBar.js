import React from 'react'
import classes from '../NavBar/NavBar.module.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import NavIcon from '../NavIcon/NavIcon'
import {Link} from 'gatsby'

const navbar = (props) => (
    <div className={classes.NavBar}>
        <NavIcon />
        <HamburgerMenu clicked={props.clicked}/>
        <div className={classes.DesktopNavItems}>
            <Link className={classes.Link} to="/">Home</Link>
            <Link className={classes.Link} to="/FaQ">FaQ</Link>
            <Link className={classes.Link} to="/Pricing">Pricing</Link>
            <Link className={classes.Link} to="/Order">Order</Link>
            <Link className={classes.Link} to="/Gallery">Gallery</Link>
        </div>
    </div>
)

export default navbar;
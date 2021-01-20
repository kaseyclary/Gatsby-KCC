import React from 'react'
import classes from '../NavBar/NavBar.module.css'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import NavIcon from '../NavIcon/NavIcon'

const navbar = (props) => (
    <div className={classes.NavBar}>
        <NavIcon />
        <HamburgerMenu clicked={props.clicked}/>
    </div>
)

export default navbar;
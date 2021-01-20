import React from 'react'
import classes from '../HamburgerMenu/HamburgerMenu.module.css'

const hamburgerMenu = (props) => (
    
    <div className={classes.HamburgerMenu} onClick={props.clicked}>
        {console.log(props.clicked)}
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default hamburgerMenu;
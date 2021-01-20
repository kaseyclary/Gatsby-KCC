import React from 'react'
import classes from '../NavBarDropdown/NavBarDropdown.module.css'
import {Link} from 'gatsby'

const navBarDropdown = (props) => (
    <div className={classes.NavBarDropdown} style={props.status ? {display: 'flex'} : {display: 'none'}}>
        {console.log(props.status)}
        <ul className={classes.NavLinkList}>
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

export default navBarDropdown;
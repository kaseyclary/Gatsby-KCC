import React from 'react'
import classes from '../Footer/Footer.module.css'

const footer = (props) => (
    <footer className={classes.Footer}>
        <p>Custom web development by Kasey Clary</p>
        <p>Follow us on social media!</p>
        <div className={classes.SocialContainer}>
            <a href=""><div className={classes.FacebookIcon}></div></a>
            <a href=""><div className={classes.InstaIcon}></div></a>
        </div>
    </footer>
)

export default footer;
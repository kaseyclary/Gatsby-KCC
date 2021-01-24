import React from 'react'
import classes from '../Footer/Footer.module.css'

const footer = (props) => (
    <footer className={classes.Footer}>
        <div className={classes.FooterContent}>
            <div className={classes.footerText}>
                <p>Custom web development by Kasey Clary</p>
                <p>Follow us on social media!</p>
            </div>
            <div className={classes.SocialContainer}>
                <a href=""><div className={classes.FacebookIcon}></div></a>
                <a href=""><div className={classes.InstaIcon}></div></a>
            </div>
        </div>
    </footer>
)

export default footer;
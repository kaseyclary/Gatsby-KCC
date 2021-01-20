import React from 'react'
import classes from '../Hero/Hero.module.css'

const hero = (props) => (
    <header className={classes.Hero}>
        <div className={classes.HeroImage}>
            <div className={classes.HeroOverlay}>
                <div className={classes.HeroLogo}></div>
            </div>
        </div>
    </header>
)

export default hero;
import React from 'react';
import classes from '../AboutDesktop/AboutDesktop.module.css';
import { Link } from 'gatsby'

const aboutDesktop = (props) => (
    <div className={classes.AboutContainer}>
        <div className={classes.AboutContent}>
            <div className={classes.AboutInfo}>
                <div className={classes.AboutLogo} />
                <div className={classes.AboutText}>
                    {props.innerContent}
                </div>
            </div>
            <div className={classes.AboutLinks}>
                <Link to="/Pricing" className={classes.Link}>Pricing</Link>
                <Link to="/Order" className={classes.Link}>Order</Link>
            </div>
            <div className={classes.Testamonial}>
                <p>"The most amazing charcuterie boards. They are beautiful and they taste just as good as they look!" - Jacob S.</p>
            </div>
        </div>
    </div>
);

export default aboutDesktop;
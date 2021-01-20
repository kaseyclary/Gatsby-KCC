import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import classes from '../pages/Pricing.module.css'
import Layout from '../containers/Layout/Layout'
import {graphql, useStaticQuery} from 'gatsby'
import decor from '../assets/images/blueberries.webp'

const Pricing = () => {
    const pricingInfoQuery = useStaticQuery(graphql`
            query {
                allContentfulPricingInfoPricingInfoTextNode {
                edges {
                    node {
                    internal {
                        content
                    }
                    }
                }
                }
            }
        `);
    
    const pricingInfoText = pricingInfoQuery.allContentfulPricingInfoPricingInfoTextNode.edges.map((edge) => {
        return (edge.node.internal.content)
    });

    return(
        <Layout>
            <div className={classes.PricingContainer}>
                <div className={classes.Pricing}>
                    <div className={classes.HeaderContent}>
                        <h2>Pricing</h2>
                        <img src={decor} alt="Blueberry design decoration" className={classes.HeaderImg}/>
                        {pricingInfoText}
                    </div>
                    <div className={classes.PricingOptions}>
                        <div className={classes.PricingOption}>
                            <h3>Six to Eight</h3>
                            <div className={classes.PricingOption1} />
                            <p>$120, plus delivery</p>
                        </div>
                        <div className={classes.PricingOption}>
                            <h3>Eight to Ten</h3>
                            <div className={classes.PricingOption2} />
                            <p>$160, plus delivery</p>
                        </div>
                        <div className={classes.PricingOption}>
                            <h3>Ten to Fifteen</h3>
                            <div className={classes.PricingOption3} />
                            <p>$210, plus delivery</p>
                        </div>
                        <div className={classes.PricingOption}>
                            <h3>Fifteen plus</h3>
                            <div className={classes.PricingOption4} />
                            <p>Submit an inquiry for special pricing</p>
                        </div>
                        <div className={classes.PricingOption}>
                            <h3>Large Event Catering</h3>
                            <div className={classes.PricingOption5} />
                            <p>Event catering also varies based on guest count, location and if you are wanting to provide appetizers for guests, or have Charcuterie be the main meal. </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Pricing;
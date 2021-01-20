import React from 'react';
import classes from './FaQ.module.css';
import Accordion from '../components/Accordion/Accordion'
import Layout from '../containers/Layout/Layout'


const faq = () => (
    <Layout>
        <div className={classes.FaQ}>
            <div className={classes.bgImg}>
                <Accordion />
            </div>
        </div>
    </Layout>
)

export default faq;
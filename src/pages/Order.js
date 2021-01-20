import React from 'react'
import classes from '../pages/Order.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../containers/Layout/Layout'
import OrderForm from '../components/OrderForm/OrderForm'

const Order = () => (
    <Layout>
        <div className={classes.OrderContainer}>
            <div className={classes.Order}>
                <div className={classes.OrderHeader}>
                    <h2>Want to order?</h2>
                    <h3>Fill this out, and we'll be with you ASAP!</h3>
                </div>
                <OrderForm />
            </div>
        </div>
    </Layout>
)

export default Order;
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from '../OrderForm/OrderForm.module.css'

const OrderForm = () => (
    <Form 
        className={classes.Form}
        name="OrderForm"
        method="post"
        data-netlify="true"
        onSubmit="submit">
        <input type="hidden" name="form-name" value="OrderForm" />
        <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Jane" name="first-name"/>
        </Form.Group>
        <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Doe" name="last-name"/>
        </Form.Group>
        <Form.Group controlId="formZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="90210" name="zip-code"/>
        </Form.Group>
        <Form.Group controlId="formOrderType">
            <Form.Label>Order Type</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." name="event-type">
                <option>Choose...</option>
                <option>Valentine's Special</option>
                <option>Small Group</option>
                <option>Event</option>
                <option>Brunch</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date"/>
        </Form.Group>
        <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="555-555-5555" name="phone-number" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="jane.doe@gmail.com" name="email-address"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formPartySize">
            <Form.Label>Expected Party Size</Form.Label>
            <Form.Control type="num" placeholder="100+" name="party-size"/>
        </Form.Group>
        <Button variant="primary" type="submit" className={classes.Button}>
            Submit
        </Button>
    </Form>
)

export default OrderForm;
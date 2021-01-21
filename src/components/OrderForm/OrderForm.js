import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import classes from '../OrderForm/OrderForm.module.css'

const OrderForm = () => (
    <form name="contact" method="POST" data-netlify="true">
        <Form className={classes.Form}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control form-name="LastName" type="text" placeholder="Jane"/>
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Doe"/>
            </Form.Group>
            <Form.Group controlId="formZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="90210"/>
            </Form.Group>
            <Form.Group controlId="formOrderType">
                <Form.Label>Order Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Small Group</option>
                    <option>Event</option>
                    <option>Brunch</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="555-555-5555" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="jane.doe@gmail.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPartySize">
                <Form.Label>Expected Party Size</Form.Label>
                <Form.Control type="num" placeholder="100+"/>
            </Form.Group>
            <Button variant="primary" type="submit" className={classes.Button}>
                Submit
            </Button>
        </Form>
    </form>
)

export default OrderForm;
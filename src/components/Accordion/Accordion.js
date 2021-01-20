import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import classes from '../Accordion/Accordion.module.css'

const accordion = () => (
    <Accordion className={classes.Accordion}>
        <h2 className={classes.Header}>Frequently Asked Questions</h2>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="0" className={classes.Toggle}>
                How does this work?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body className={classes.CardBody}>Once you receive your board price, you confirm your order via communication with me. From your given location, I bring all the needed ingredients & supplies onsite and assemble your board 1-2 hours before your event/when you want your board to be ready by! Boards are created freshly onsite for all large orders. Minimum board orders are 6 servings, but you can contact me for smaller requests. I also do themed boards for holidays, events, birthdays, whatever you are celebrating. All boards include a variety of high end meats, cheeses, pickled items, spreads, jams, fruits, complimentary items, sweets, crackers and more! Boards can be used as an appetizer, or as the main dish, this all depends on how much your group can eat. I often receive feedback from clients saying they got very full from my portion sizes.    </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.Toggle}>
                How far do you travel?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                <Card.Body className={classes.CardBody}>I travel all around Iowa and surrounding states! will accept any order within 3 hours of the DesMoines Metro however, delivery pricing will reflect my travel distance. Message me to get pricing for your group and location! </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="2" className={classes.Toggle}>
                Do you offer individual boards?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
                <Card.Body className={classes.CardBody}>I do not have smaller, individually sized boards regularly available. I do have access to a commercial kitchen, and will occasionally offer smaller order options. Follow my Facebook to see when these small board offerings are available! </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="3" className={classes.Toggle}>
                Can I see a menu?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
                <Card.Body className={classes.CardBody}>I do not have a set menu, all my boards include a variety of high end meats, cheeses, pickled items, spreads, jams, fruits, complimentary items, sweets, crackers and more! Due to availability and seasonal items, I do not have a set menu and item breakdown.</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="4" className={classes.Toggle}>
                Can I special request items or make substiutions?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
                <Card.Body className={classes.CardBody}>You can request to NOT include certain items, however you can not then request what to replace those items with. For example, “I don’t want pickles on my board, I want more meat instead” you can request no pickles, but I will choose what substitution to make based on availability and best pairing options. Or requests such as, “for fruits I want blackberries and red grapes” all items are chosen based on season, availability, and what pairs best with other items on your board, please trust the process! PLEASE tell me if you are allergic to any fruits, nuts or oils that may be on your board and I will ensure your board is safe for you to enjoy. Part of the experience is trying items and combinations you wouldn’t typically pick yourself! </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className={classes.Card}>
            <Accordion.Toggle as={Card.Header} eventKey="5" className={classes.Toggle}>
                What is your maximum order size?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
                <Card.Body className={classes.CardBody}>The limit does not exist. I love large catering orders! Send me your event info and I will work with you on pricing out your dream spread! </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
)

export default accordion;
import React, {Component} from 'react';
import classes from '../About/About.module.css';
import Aux from '../../HOC/aux'

class About extends Component{
    constructor(props){
        super(props)
    }

    state = {
        isExpanded: false,
        isMobile: true
    }

    aboutToggle = () => {
        this.setState((prevState) => {
            return {isExpanded: !this.state.isExpanded};
        });
    }

    render(){
        let aboutClasses = [classes.AboutContent, classes.Collapsed];
        if(this.state.isExpanded){
            aboutClasses = [classes.AboutContent, classes.Expanded];
        } else {
            aboutClasses = [classes.AboutContent, classes.Collapsed]
        }
        const aboutContent = (
            <div className={aboutClasses.join(' ')}>
                <p>{this.props.innerContent}</p>
            </div>
        )
        return(
            <Aux>
                <div className={classes.AboutContainer}>
                    <div className={classes.About}>
                        <div className={classes.AboutHeader} onClick={this.aboutToggle}>
                            <h2>About</h2>
                            <div className={classes.DropDownArrow} />
                        </div>
                    </div>
                    {aboutContent}
                </div>
            </Aux>
        )
    }
}

export default About;
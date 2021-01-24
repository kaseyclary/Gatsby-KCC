import React, {Component} from "react"
import Aux from '../../HOC/aux'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import NavBarDropdown from '../../components/Navigation/NavBar/NavBarDropdown/NavBarDropdown'
import Footer from '../../components/Footer/Footer'
import DesktopNavbar from '../../components/Navigation/NavBar/DesktopNavbar/DesktopNavbar'
import classes from '../Layout/Layout.module.css'

class Layout extends Component {
  state = {
    navMode: false,
    isMobile: true
  }

  handleNavDropdown = () => {
    this.setState((prevState) => {
      return {navMode: !this.state.navMode};
    });
  }

  render () {
    
    const navbar = (
      <Aux>
        <NavBar clicked={this.handleNavDropdown}/>
        <NavBarDropdown status={this.state.navMode}/>
      </Aux>
    );
    return(
      <div>
        {this.state.isMobile ? navbar : <DesktopNavbar />}
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;


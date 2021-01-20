import React, {Component} from "react"
import classes from './layout.module.css'
import Aux from '../../HOC/aux'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import NavBarDropdown from '../../components/Navigation/NavBar/NavBarDropdown/NavBarDropdown'
import Footer from '../../components/Footer/Footer'
import DesktopNavbar from '../../components/Navigation/NavBar/DesktopNavbar/DesktopNavbar'

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

  componentDidMount(){
    if(window.screen.width > 800){
      this.setState({isMobile: false})
    } else {
      this.setState({isMobile: true})
    }
  }
  render () {
    
    const navbar = (
      <Aux>
        <NavBar clicked={this.handleNavDropdown}/>
        <NavBarDropdown status={this.state.navMode}/>
      </Aux>
    );
    return(
      <Aux>
        {this.state.isMobile ? navbar : <DesktopNavbar />}
        {this.props.children}
        <Footer />
      </Aux>
    )
  }
}

export default Layout;


import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarStyle'
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {
    

const ToggleHome = () => {
    scroll.scrollToTop();
};   

return (
     
    <>
        <Nav>
            <NavbarContainer>
                <NavbarLogo to="/" onClick={ToggleHome}>DolphinFinance</NavbarLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>  
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                        smooth={true} 
                        duration={600} 
                        spy={true} exact='true' 
                        offset={-80}>About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true} 
                        duration={600} 
                        spy={true} exact='true' 
                        offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='features'
                        smooth={true} 
                        duration={600} 
                        spy={true} exact='true' 
                        offset={-80}>Features</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='testimonials'
                        smooth={true} 
                        duration={600} 
                        spy={true} exact='true' 
                        offset={-80}>Testimonials</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    )
}

export default Navbar;

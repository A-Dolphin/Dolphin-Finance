import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute} from './SidebarStyle'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="features" onClick={toggle}>Features</SidebarLink>
                    <SidebarLink to="testimonials" onClick={toggle}>Testimonials</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

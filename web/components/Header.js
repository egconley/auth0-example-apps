import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { useState } from 'react';
import React from 'react';

const Header = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <>
        <Navbar color="light" light expand="md">
            <img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" className="float-left mr-2" width="80px" alt="Auth0 logo" />
            <NavbarBrand href="/">DSE Sample Apps</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    {user ? (<><a href="/profile"><img height="30px" src={user.picture} className="rounded-circle mr-1 my-auto"/></a>&nbsp;&nbsp; <a href="/manage" className="my-auto">Manage</a> &nbsp;&nbsp;<a href="/api/logout" className="my-auto">Logout</a></>): <a href="/api/login">Login</a> }
                </Nav>
        </Navbar>
    </>
    )
}

export default Header;

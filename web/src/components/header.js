import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  Button
} from 'reactstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ siteTitle, user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


return(
  <>
    <Navbar color="light" light expand="md">
        <img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" className="float-left mr-2" width="80px" alt="Auth0 logo" />
        <Link to="/"><NavbarBrand>{siteTitle}</NavbarBrand></Link>
            <Nav className="ml-auto" navbar>
                {user ? (<><a href="/profile"><img height="30px" src={user.picture} className="rounded-circle mr-1 my-auto"/></a>&nbsp;&nbsp; <a href="/manage" className="my-auto">Manage</a> &nbsp;&nbsp;<a href="/api/logout" className="my-auto">Logout</a></>): <Button className="bg-white"><Link to="/api/login">Login</Link></Button> }
            </Nav>
    </Navbar>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

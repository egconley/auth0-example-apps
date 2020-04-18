import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { useState, useEffect } from 'react';

const Header = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar color="light" light expand="md">
            <img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" className="float-left mr-2" width="80px" alt="Auth0 logo" />
            <NavbarBrand href="/">DSE Sample Apps</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Manage
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                {user ? <a href="/profile">{user.name}</a> : <a href="/api/login">Login</a> }
                            </DropdownItem>
                            { user ? (
                                <>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <a href="/api/logout">Logout</a>
                                    </DropdownItem>
                                </>) : false}
                        </DropdownMenu>
                    </UncontrolledDropdown >
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default Header;

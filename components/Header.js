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
            <img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" className="float-left mr-3" width="80px" alt="Auth0 logo" />
            <NavbarBrand href="https://dse.rosnovsky.us">DSE Sample Apps</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://manage.auth0.com/#/applications">Manage Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/rosnovsky/auth0-example-apps/blob/master/auth0/tenant.yaml">Download tenant settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/rosnovsky/auth0-example-apps">Fork on Github</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                {user ? <a href="/profile">{user.name}</a> : <a href="/api/login">Login</a> }
                            </DropdownItem>
                            <DropdownItem>
                                {user ? user.email : ""}
                            </DropdownItem>
                            { user ? (
                                <>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <a href="/api/logout">Logout</a>
                                </DropdownItem>
                                </>) : ""}
                        </DropdownMenu>
                    </UncontrolledDropdown >
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default Header;

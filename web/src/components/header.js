import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavbarBrand, Nav, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Header = ({ siteTitle }) => {
  let user = {}
  if (isAuthenticated()) {
    user = JSON.parse(getProfile())
  }

  return (
    <>
      <Navbar color="light" light expand="md">
        <img
          src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg"
          className="float-left mr-2"
          width="80px"
          alt="Auth0 logo"
        />
        <NavbarBrand>{siteTitle}</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {isAuthenticated() ? (
            <>
              <Link to="/profile">
                <img
                  height="30px"
                  src={user.picture}
                  alt={user.name}
                  className="rounded-circle mr-1 my-auto"
                />
              </Link>
              &nbsp;&nbsp;{" "}
              <Link to="/profile" className="my-auto">
                Manage
              </Link>{" "}
              &nbsp;&nbsp;
              <a href="#" onClick={logout} className="my-auto">
                Logout
              </a>
            </>
          ) : (
            <Button className="bg-white">
              <a href="#" onClick={login}>
                Login
              </a>
            </Button>
          )}
        </Nav>
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

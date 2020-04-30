import Header from "../components/header"
import { Container, Row, Col } from "reactstrap"
import React, { useEffect } from "react"
import ContentLoader from "react-content-loader"
import { getProfile } from "../utils/auth"

const Profile = () => {

  ///
  /// Assignments to the 'user' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect  react-hooks/exhaustive-deps
  
  let user

  useEffect(() => {
    user = JSON.parse(getProfile())
  }, [])

  return (
    <Container fluid="true" className="container-fluid px-auto mx-auto">
      <Header className="full-width" user={user} />
      <Row className="pb-5 mx-auto justify-content-center flex-column">
        <Col className="mx-auto my-auto justify-content-center">
          {user && user.name ? (
            <>
              <Row className="mx-auto my-3 justify-content-center">
                <img
                  src={user.picture}
                  alt="Profile"
                  className="rounded-circle profile-picture mx-auto my-auto"
                  width="200px"
                />
              </Row>
              <Row className="mx-auto my-auto justify-content-center">
                <h2>{user.name}</h2>
              </Row>
              <Row className="mx-auto my-auto justify-content-center">
                <small>
                  <a
                    href={`https://duckduckgo.com/?q=map+${user["https://example.com/geoip"].latitude}%2C+${user["https://example.com/geoip"].longitude}&t=ffab&atb=v199-1&ia=web&iaxm=maps`}
                  >
                    {user["https://example.com/geoip"].city_name},{" "}
                    {user["https://example.com/geoip"].country_name}
                  </a>
                </small>
              </Row>
            </>
          ) : (
            <Row className="justify-content-center">
              <ProfilePlaceholder className="mx-auto my-auto" />
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Profile

export const ProfilePlaceholder = () => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={400}
      viewBox="0 0 600 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="50" y="250" rx="3" ry="3" width="500" height="6" />
      <rect x="50" y="272" rx="3" ry="3" width="430" height="6" />
      <rect x="50" y="288" rx="3" ry="3" width="480" height="6" />
      <circle cx="300" cy="110" r="100" />
    </ContentLoader>
  )
}

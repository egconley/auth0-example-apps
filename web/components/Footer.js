import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Container className="pt-4 my-md-5 pt-md-5 border-top">
            <Row className="container container-fluid mx-auto">
                <Col className="col-12 col-md">
                    <a className="mx-auto mb-2" href="https://auth0.com"><img src="/auth0-logo-forlightbg.png" width="50px" alt="Auth0 Logo" /></a>
                    <p className="mt-2">© 2020 Auth0, Inc </p>
                </Col>
                <Col className="col-6 col-md d-block">
                    <h5>Tools</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a href="https://manage.auth0.com/#/applications" className="text-dark">Manage Dashboard</a>
                        </li>
                        <li>
                            <a href="https://github.com/rosnovsky/auth0-example-apps/blob/master/auth0/tenant.yaml" className="text-muted">Download tenant settings</a>
                        </li>
                        <li>
                            <a href="https://github.com/rosnovsky/auth0-example-apps" className="text-muted">Fork on Github</a>
                        </li>
                        <li>
                            <a href="https://har.auth0.net" className="text-muted">HAR Inspector</a>
                        </li>
                    </ul>
                </Col>
                <Col className="col-6 col-md">
                    <h5>Auth0 Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a href="https://auth0.com/docs/videos/learn-identity" className="text-dark">Learn Identity</a>
                        </li>
                        <li>
                            <a href="https://auth0.com/docs/videos/get-started/" className="text-muted">Getting Started</a>
                        </li>
                        <li>
                            <a href="https://support.auth0.com/" className="text-muted">Help & Support</a>
                        </li>
                        <li>
                            <a href="https://auth0.com/blog/" className="text-muted">Auth0 Blog</a>
                        </li>
                    </ul>
                </Col>
                <Col className="col-6 col-md">
                    <h5>Authentication</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a href="https://oauth.net/2/" className="text-dark">OAuth 2.0</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )};

    export default Footer;

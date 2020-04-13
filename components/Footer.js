import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Container className="container-fluid mt-5 mb-3 fixed-bottom">
            <Row className="mx-auto">
            <a className="mx-auto" href="https://auth0.com"><img src="/auth0-logo-forlightbg.png" width="80px" alt="Auth0 Logo" /></a>
            </Row>
        </Container>
    )};

    export default Footer;

import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Container, Row, Col, Highlight } from 'reactstrap';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState("Stranger");

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await fetch('/api/profile');
            const result = await userData.json();
            setUser(result);
            return result;
        }
        fetchUser();
    }, [])

    return (
        <>
        <Head>
            <link rel="preload" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" as="style" />
        </Head>
        <Container fluid={true}>
            <Row>
                <Col>
                    <Header user={user} />
                </Col>
            </Row>
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                <Col md={2}>
                <img
                    src={user.picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
                </Col>
                <Col md>
                <h2>{user.name}</h2>
                <p className="lead text-muted">{user.email}</p>
                </Col>
            </Row>
            <Row>
                <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
            </Row>
            <Footer />
        </Container>
        </>
    )
}

export default Profile;

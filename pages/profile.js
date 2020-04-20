import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Container, Row, Col, Highlight } from 'reactstrap';
import { useState, useEffect } from 'react';
import { ProfilePlaceholder } from '../components/Profile';

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
        <Container fluid="true" className="container-fluid px-auto mx-auto">
            <Header className="full-width" user={user} />
            <Row>
                <Col className="d-flex my-5 mx-auto justify-content-center">
                    {user && user.name ? 
                    (<><Col className="mx-auto">
                        <img
                            src={user.picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </Col>
                    <Col>
                        <h2>{user.name}</h2>
                        <p className="lead text-muted">{user.email}</p>
                    </Col></> )
                    : <ProfilePlaceholder className="mx-auto my-auto" /> }
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Profile;

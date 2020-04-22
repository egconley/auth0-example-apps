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
                <Row className="pb-5 mx-auto justify-content-center flex-column">
                    <Col className="mx-auto my-auto justify-content-center">
                        {user && user.name ? 
                        (<><Row className="mx-auto my-3 justify-content-center">
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="rounded-circle profile-picture mx-auto my-auto"
                                width="200px"
                            />
                    </Row>
                    <Row className="mx-auto my-auto justify-content-center">
                        <h2>{user.name}</h2></Row>
                    <Row className="mx-auto my-auto justify-content-center">
                        <small>
                            <a href={`https://duckduckgo.com/?q=map+${user["https://example.com/geoip"].latitude}%2C+${user["https://example.com/geoip"].longitude}&t=ffab&atb=v199-1&ia=web&iaxm=maps`}>
                            {user["https://example.com/geoip"].city_name}, {user["https://example.com/geoip"].country_name}</a>
                        </small>
                    </Row></> )
                    : <Row className="justify-content-center"><ProfilePlaceholder className="mx-auto my-auto" /></Row> }
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Profile;

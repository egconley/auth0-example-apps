import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Apps from '../components/Apps';
import Footer from '../components/Footer';
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { useState, useEffect } from 'react';
import { ContentPlaceholder } from '../components/Apps';

export const ALL_APPS_QUERY = gql`
    query {
        apps {
            _id
            name
            description
            stack{
                name
                url
            }
            url
            screenshot
            deploy
            quickstart
    }
}
`

const Home = () => {
  const { data, loading, error, refetch } = useQuery(ALL_APPS_QUERY);

  const [user, setUser] = useState();

    useEffect(() => {
        fetchProfile();
    }, [])

    const fetchProfile = async () => {
        const res = await fetch('/api/profile');
        if (res.ok) {
            setUser(await res.json())
        }
        if(!res.ok) {
            console.log(res)
        }
    }

  return (  
  <>
    <Head>
      <title>Auth0 DSE Sample Apps</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
    </Head>

    <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Header className="full-width" user={user} />
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            {
            loading ? <ContentPlaceholder className="mx-auto my-auto" title="Loading..." /> : data && data.apps ?
              <Apps apps={data.apps} /> : <ContentPlaceholder className="mx-auto my-auto" title="Hm... This is impossible 🤔"/>
            }
          </Col>
        </Row>
        <Footer />
    </Container>
  </>
)}

export default withApollo({ ssr: true })(Home)

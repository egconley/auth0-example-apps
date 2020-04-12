import Head from 'next/head'
import { useEffect, useState, setState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import Apps from '../components/Apps';
import Footer from '../components/Footer';
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

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

  return (  
  <>
    <Head>
      <title>Auth0 DSE Sample Apps</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
    </Head>

    <Container fluid={true}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
        {
        loading ? "Loading" : error ? "Error" : data && data.apps ?
          <Apps apps={data.apps} /> : "Hm... 🤔"
        }
        </Col>
      </Row>
        <Footer />
    </Container>
  </>
)}

export default withApollo({ ssr: true })(Home)

import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentPlaceholder } from '../../components/Apps';

const IndexPage = ({user}) => {

return (
  <Layout>
    <SEO title="Home" />
    <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5">
          <Col className="d-flex mx-auto justify-content-center">
            {/* {loading ?  */}
            <ContentPlaceholder className="mx-auto my-auto" title="Loading..." /> 
            {/* // : data && data.apps ?
            //   <Apps apps={data.apps} /> : <ContentPlaceholder className="mx-auto my-auto" title="Hm... This is impossible 🤔"/>
            // } */}
          </Col>
        </Row>
    </Container>
  </Layout>
)}

export default IndexPage

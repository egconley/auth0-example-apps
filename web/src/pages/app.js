import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Button,
    Container,
    Col
} from "reactstrap"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const AppPage = ({ data }) => {
    const app = data.sanityApp
    
    return (
        <Layout>
            <SEO title={app.title} />
            <Container fluid="true" className="container-fluid px-auto mx-auto">
                <Row className="pb-5">
                    <Col className="d-flex mx-auto justify-content-center">
                        <Card style={{ width: 24 + "rem" }} className="mx-auto mt-5">
                            <a href={app.slug.current}>
                            <CardImg
                                top
                                style={{ minHeight: "200px" }}
                                src={app.screenshot.asset.url}
                                alt={app.title}
                            />
                            </a>
                            <CardBody>
                                <CardTitle>
                                    <a href={app.slug.current}>
                                    <h2>{app.title}</h2>
                                    </a>
                                </CardTitle>
                                <CardText>{app._rawDescription[0].children[0].text}</CardText>
                                <Row className="mx-auto justify-content-between">
                                    <p>
                                    <a href={app.quickstart} className="text-muted">
                                        Quickstart
                                    </a>
                                    </p>
                                    <p>
                                    <a href={app.docs} className="text-muted">
                                        Docs
                                    </a>
                                    </p>
                                </Row>
                                <Row className="mx-auto justify-content-center mb-3">
                                    <a href={app.deploy} className="deploy">
                                    <img src="https://zeit.co/button" alt="Deploy to ZEIT Now" />
                                    </a>
                                </Row>
                                <Row className="mx-auto justify-content-center mb-3">
                                    <Button className="btn-block btn-light" href={app.url}>
                                    {app.title} &rarr;
                                    </Button>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default AppPage

export const data = graphql`
query AppPageQuery($id: String){
    sanityApp(_id: {eq: $id}) {
        title
        screenshot {
            asset {
                url
            }
        }
        _rawDescription(resolveReferences: {maxDepth: 5})
        technology {
            title
            slug {
                current
            }
        }
        slug {
            current
        }
        deploy
        quickstart
        docs
        url
        _id
    }
}`

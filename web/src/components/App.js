import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Button
} from 'reactstrap';
import React from 'react'
// import { useState, useEffect } from "react";
// import { toDataUrl } from '../lib/screenshots';

const App = ({ app }) => {
    console.log(app.node)
    return (
    <>
        <Card style={{"width": 24 + "rem"}} className="mx-auto mt-5">
            <a href={app.node.url}><CardImg top style={{"minHeight": "200" + "px"}} src={app.node.screenshot} alt={app.node.name} /></a>
            <CardBody>
                <CardTitle><a href={app.node.url}><h2>{app.node.name}</h2></a></CardTitle>
                <CardText>{app.node.description}</CardText>
                <Row className="mx-auto justify-content-between">
                    <p><a href={app.node.quickstart} className="text-muted">Quickstart</a></p>
                    <p><a href={app.node.stack.url} className="text-muted">Docs</a></p>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                    <a href={app.node.deploy} className="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                    <Button className="btn-block btn-light" href={app.node.url}>{app.node.name} &rarr;</Button>
                </Row>
            </CardBody>
        </Card>
    </>
    )};

    export default App;

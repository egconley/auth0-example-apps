import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Button
} from 'reactstrap';
import ContentLoader from 'react-content-loader';
import { useState, useEffect } from "react";
// import { toDataUrl } from '../lib/screenshots';

const App = ({ app }) => {
    const [screenshot, setScreenshot ] = useState();

    const refetchScreenshot = async (screenshotUrl) => {
        function callback(result){
            setScreenshot(result);
            localStorage.setItem(app.name, result);
            return result;
        }

        const base64image = await toDataUrl(screenshotUrl, callback);
        return base64image;
    }

    useEffect(() => {
        const isInLocalStorage = localStorage.getItem(app.name);
        const existingTimestamp = localStorage.getItem("timestamp");
        const currentTimestamp = Date.now();

        if (isInLocalStorage === undefined || isInLocalStorage === null || currentTimestamp - existingTimestamp > 432000000 ) {
                refetchScreenshot(app.screenshot);
                localStorage.setItem("timestamp", currentTimestamp)
            }
            else {
                setScreenshot(localStorage.getItem(app.name));
            }
    }, [screenshot])

    return (
    <>
        <Card style={{"width": 24 + "rem"}} className="mx-auto mt-5">
            <a href={app.url}><CardImg top style={{"minHeight": "200" + "px"}} src={screenshot} alt={app.name} /></a>
            <CardBody>
                <CardTitle><a href={app.url}><h2>{app.name}</h2></a></CardTitle>
                <CardText>{app.description}</CardText>
                <Row className="mx-auto justify-content-between">
                    <p><a href={app.quickstart} className="text-muted">Quickstart</a></p>
                    <p><a href={app.stack.url} className="text-muted">Docs</a></p>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                    <a href={app.deploy} className="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
                </Row>
                <Row className="mx-auto justify-content-center mb-3">
                    <Button className="btn-block btn-light" href={app.url}>{app.name} &rarr;</Button>
                </Row>
            </CardBody>
        </Card>
    </>
    )};

    export default App;

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Button
} from 'reactstrap';

const App = ({ app }) => {
    return (
    <>
        <Card style={{"width": 24 + "rem"}} className="mx-auto mt-5">
            <a href={app.url}><CardImg top style={{"minHeight": "200" + "px"}} src={app.screenshot} alt={app.name} /></a>
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

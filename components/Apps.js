import { Row } from 'reactstrap';
import App from './App';

const Apps = ({apps}) => {
    return (
        <Row className="mx-auto" style={{"width": 80 + "%"}}>
            {apps.map(app => (
                <App app={app} key={app._id} />
                )
            )}
        </Row>
    )}

    export default Apps;

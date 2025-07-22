import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'react-bootstrap'

const video = () =>{
    return (
        <Container>
        <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU?si=59lTdlHfSg-Fi9vd" title="YouTube video" allowFullScreen></iframe>
        </div> 
        </Container>

    )
}

export default video;
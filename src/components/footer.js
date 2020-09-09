import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Footer(){
    const footerData = (
        <Jumbotron fluid className="footer">
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                Arrumar Footer mobile
                </p>
            </Container>
        </Jumbotron>
    )

    return footerData;
}

export default Footer;
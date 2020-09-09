import React from 'react';
import { Navbar } from "react-bootstrap";

function HeaderNavBar(){
    return (
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Caio's Challenge</Navbar.Brand>
        </Navbar>
    )
}

export default HeaderNavBar;
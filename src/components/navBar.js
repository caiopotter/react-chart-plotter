import React from 'react';
import { Navbar } from "react-bootstrap";

function HeaderNavBar(){
    return (
        <Navbar className="nav-bar" fixed="top">
            <Navbar.Brand style={{'font-weight': 'bold'}}>Caio's Challenge</Navbar.Brand>
        </Navbar>
    )
}

export default HeaderNavBar;
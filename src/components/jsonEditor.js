import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

function JSONEditor(props){
    const editor = (
        <div>
            <div>
                <textarea id="textarea" className="text-area" value={props.json} onChange={props.onChange} />
            </div>
            <div className="fixed-bottom">  
            <Navbar className="footer">
                    <Button id="chartbutton" onClick={props.onClick}>Generate Chart</Button>
            </Navbar>
            </div>
        </div>
    )

    return editor;
}

export default JSONEditor
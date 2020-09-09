import React from 'react';
import { Button } from 'react-bootstrap';


function JSONEditor(props){
    const editor = (
        <div><textarea className="text-area" value={props.json} onChange={props.onChange} />
        <Button onClick={props.onClick}>Generate Chart</Button>
        </div>
    )

    return editor;
}

export default JSONEditor
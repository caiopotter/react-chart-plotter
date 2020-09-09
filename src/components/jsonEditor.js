import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import { Button } from 'react-bootstrap';


function JSONEditor(props){
    const editor = (
        <div><textarea style={{width: '100%', height: '300px'}} value={props.json} onChange={props.onChange} />
        <Button onClick={props.onClick}>Generate Chart</Button>
        </div>
    )

    return editor;
}

export default JSONEditor
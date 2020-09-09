import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import { Button } from 'react-bootstrap';


function JSONEditor(props){
    const editor = (
        <div><JSONInput
            fluid
            id          = 'a_unique_id'
            placeholder = { props.json }
            height      = '300px'
            width = '100%'
            confirmGood = {false}
            onChange={props.onChange}
        />
        <Button onClick={props.onClick}>Generate Chart</Button>
        </div>
    )

    return editor;
}

export default JSONEditor
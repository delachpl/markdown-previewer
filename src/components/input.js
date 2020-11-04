import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import input from './input.css';

const InputComp = (props) => {
    
    return (
        <div className={props.screenChange ? "fullScreenSize" : "input-area"} >
            <div className="title-bar">
                
                <h2>Editor</h2>
                <button onClick={props.screenChangeFunction} className="full-screen-button">{props.screenChange ? <FontAwesomeIcon className="full-screen-icon" icon={faExpandAlt} /> : <FontAwesomeIcon className="full-screen-icon" icon={faCompressAlt} /> }</button>

            </div>
            <textarea type="text" id="editor" value={props.changeValue} onChange={props.handleChangeManagement} />
        </div>
    )

}

export default InputComp
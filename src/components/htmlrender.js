import React from 'react';
import htmlrender from './htmlrender.css';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import marked from 'marked';



const HtmlRender = (props) => {


    return (
        <div className={props.renderSizeChange ? "fullScreenRender" : "render-html"}>
            <div className="title-bar">
                
                <h2>Previewer</h2>
                <button onClick={props.renderSizeFunction} className="full-screen-button">{props.renderSizeChange ? <FontAwesomeIcon className="full-screen-icon" icon={faCompressAlt}  /> : <FontAwesomeIcon className="full-screen-icon" icon={faExpandAlt} /> }</button>

            </div>
            <div id="preview" className="paragraph-render" dangerouslySetInnerHTML={{__html:marked(props.changeValue)}}>
            
            </div>
        </div>
        
    )
}

export default HtmlRender

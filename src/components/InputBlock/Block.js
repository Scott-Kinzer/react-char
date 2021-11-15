import React from 'react';
import "./block.css";

export const Block = (props) => {
    return <div className={props.className}>{props.children}</div>
}
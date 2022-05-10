import React from "react";

const Square = (props) => {
    return (
        <div style={{backgroundColor: props.color}} className="Square" onClick={props.handleClick}></div>
    )
}

export default Square
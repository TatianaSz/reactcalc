import React from "react"
import "./css/key.css"

function Keyboard(props){
    return(
        <div className={'keyboard'}>
            {props.children}
        </div>
    )
}

export default Keyboard

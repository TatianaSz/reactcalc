import React from "react"

import "./css/screen.css"

function Screen(props){
    return(
        <div className="screen">
            {props.children}
            
        </div>
    )
}

export default Screen
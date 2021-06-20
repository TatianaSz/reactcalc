import React from "react"
import "./css/prev.css"

function Prev(props){
    return(
        <div className="prev"> 
          {props.displayed}
        </div>
    )
}
export default Prev
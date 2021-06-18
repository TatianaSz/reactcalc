import React from "react"
import "./css/btn.css"

function Button(props){
return(
<button
className={'btn-' + props.colorset}
value={props.value}
onClick={props.onClick}>
{props.value}
</button>
)
}

export default Button
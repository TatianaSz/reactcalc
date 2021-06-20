import React from "react"
import "./css/btn.css"

function Button(props){
return(
<button
className={'btn' + ' ' +'btn-' + props.colorset + " " + "btn-" + props.width}
value={props.value}
typ={props.typ}
onClick={props.onClick}
>
{props.value}
</button>
)
}

export default Button
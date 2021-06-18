import React from "react"
import Button from "./Button"
import Keyboard from "./Keyboard"
import Screen from "./Screen"
import "./css/style.css"

function App(){
    function handleCLick(e) {
        e.preventDefault();   
        console.log('Działa');
      }



    return (
        <div className="Calculator"> 
        <Screen />
        <Keyboard>
        <Button colorset="light" value="C" onClick={handleCLick}/>

        </Keyboard>
        </div>
    )



}


export default App
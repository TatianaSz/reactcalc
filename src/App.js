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
        <Button colorset="light" value="C" width="three" onClick={handleCLick}/>
        <Button colorset="light" value="/" width="one" onClick={handleCLick}/>
        
        <Button colorset="light" value="7" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="8" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="9" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="*" width="one" onClick={handleCLick}/>

        <Button colorset="light" value="4" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="5" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="6" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="+" width="one" onClick={handleCLick}/>

        <Button colorset="light" value="1" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="2" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="3" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="-" width="one" onClick={handleCLick}/>
        
        <Button colorset="light" value="0" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="." width="one" onClick={handleCLick}/>
        <Button colorset="light" value="=" width="two" onClick={handleCLick}/>

        </Keyboard>
        </div>
    )



}


export default App
import React, { useState } from "react"
import Button from "./Button"
import Keyboard from "./Keyboard"
import Screen from "./Screen"
import Prev from "./Prev"
import Current from "./Current"
import "./css/style.css"

function App(){

    const [num, setNum] = useState("")

    function handleCLick(e) {
        e.preventDefault();   
        let value = e.target.getAttribute("value")
        switch(value){
            case "=":
            case "/":
            case "+":
            case "-":
            case "*":
                let p = /\*|\+|\/|\-|\=/gm
                setNum(num + value)
                if(p.test(num)){
                    setNum(num+"")} 
            break;

         case "C":
             console.log("użyto clear");
             break;
         case "/":
             console.log("dzielenie")
             break;
        case "+":
            console.log("dodawanie");
            break;
        case "-":
            console.log("odejmowanie");
            break;
        case "*":
            console.log("mnożenie");
            break;
        case "=":
            console.log("rowna sie");
            break;
        case ".":
            setNum(num + value)
            if(num.includes(".")){
                setNum(num+"")} 
        break;
            
         default:   
        setNum(num + value)
         
        }
        
        console.log('Działa');
      }



    return (
        <div className="Calculator"> 
        <Screen> 
            <Prev displayed="10"/>
            <Current display={num} />
        </Screen>
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
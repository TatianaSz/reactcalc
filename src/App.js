import React, { useState } from "react"
import Button from "./Button"
import Keyboard from "./Keyboard"
import Screen from "./Screen"
import Prev from "./Prev"
import Current from "./Current"
import "./css/style.css"

function App(){

    const [num, setNum] = useState("")
    const [prevNum, setPrevNum] = useState(" ")

    function handleCLick(e) {
        e.preventDefault();   
        let value = e.target.getAttribute("value")
        let typ =e.target.getAttribute("typ")
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
        if(typ=="operator"){
            setPrevNum(num + value)
            setNum("")
        }
        console.log('Działa');
      }



    return (
        <div className="Calculator"> 
        <Screen> 
            <Prev displayed={prevNum}/>
            <Current display={num} />
        </Screen>
        <Keyboard>
        <Button colorset="light" value="C" typ="" width="three" onClick={handleCLick}/>
        <Button colorset="light" value="/" typ="operator" width="one" onClick={handleCLick}/>
        
        <Button colorset="light" value="7" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="8" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="9" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="*" typ="operator" width="one" onClick={handleCLick}/>

        <Button colorset="light" value="4" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="5" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="6" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="+" typ="operator" width="one" onClick={handleCLick}/>

        <Button colorset="light" value="1" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="2" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="3" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="-" typ="operator" width="one" onClick={handleCLick}/>
        
        <Button colorset="light" value="0" typ="numb" width="one" onClick={handleCLick}/>
        <Button colorset="light" value="." width="one" onClick={handleCLick}/>
        <Button colorset="light" value="=" typ="operator" width="two" onClick={handleCLick}/>

        </Keyboard>
        </div>
    )



}


export default App
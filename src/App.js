import React, { useState } from "react"
import Button from "./Button"
import Keyboard from "./Keyboard"
import Screen from "./Screen"
import Prev from "./Prev"
import Current from "./Current"
import "./css/style.css"
let op =""
function App(){

    const [num, setNum] = useState("")
    const [prevNum, setPrevNum] = useState(" ")
    

    function clear(){
        setNum("");
        setPrevNum("")
    }
    function calculate(op){
        if(prevNum === "" || isNaN(parseFloat(prevNum)) || isNaN(parseFloat(num))) return
      switch(op){
        case "+": setNum((parseFloat(prevNum)+ parseFloat(num)).toString())
        setPrevNum("")
        break;
        case "-":
            setNum((parseFloat(prevNum)- parseFloat(num)).toString())
            setPrevNum("")
        break;
        case "/":
            setNum((parseFloat(prevNum)/ parseFloat(num)).toString())
             setPrevNum("")
        break;
        case "*":
            setNum((parseFloat(prevNum)* parseFloat(num)).toString())
           setPrevNum("")
         break;
      }
        
    }
  
    function handleCLick(e) {
        e.preventDefault();   
        let value = e.target.getAttribute("value")
        let typ =e.target.getAttribute("typ")
        
      //  switch(typ){
         //   case "operator":
      //          let p = /\*|\+|\/|\=/gm
      //          setNum(num + value)
      //          if(p.test(num)){
       //             setNum(num+"")} 
      //          break;
      //  }
        switch(value){
         
         case "C":
             clear();
             break;
         case "/":
            op = "/"
             break;
        case "+":
           op = "+"
            break;
        case "-":
            op = "-"
            break;
        case "*":
            op = "*"
            break;
        case "=":
            calculate(op);
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
            if(value=="/"){}
            setPrevNum(num + value)
            setNum("")
        }
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
        <Button colorset="light" value="=" typ="equal" width="two" onClick={handleCLick}/>

        </Keyboard>
        </div>
    )



}


export default App
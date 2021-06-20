import React, { useState } from "react"
import Button from "./Button"
import Keyboard from "./Keyboard"
import Screen from "./Screen"
import Prev from "./Prev"
import Current from "./Current"
import "./css/style.css"
let op =""
let flag=true;
function App(){

    const [num, setNum] = useState("")
    const [prevNum, setPrevNum] = useState(" ")
    

    function clear(){
        setNum("");
        setPrevNum("")
        flag=true;
    }
    function calculate(op){
    
        if(prevNum === "" || isNaN(parseFloat(prevNum)) || isNaN(parseFloat(num))) return
      switch(op){
        case "+": setNum((Math.round((parseFloat((prevNum))+parseFloat((num)))*1000000)/1000000).toString())
        setPrevNum("")
       
        break;
        case "-":
            setNum((Math.round((parseFloat(prevNum)-parseFloat(num))*1000000)/1000000).toString())
            setPrevNum("")
          
        break;
        case "/":
            setNum((Math.round((parseFloat(prevNum)/ parseFloat(num))*1000000)/1000000).toString())
            setPrevNum("")
           
        break;
        case "*":
            setNum((Math.round((parseFloat(prevNum)*parseFloat(num))*1000000)/1000000).toString())
            setPrevNum("")
           
         break;
      }
 
   
    }
  
    function handleCLick(e) {
        e.preventDefault();   
        let value = e.target.getAttribute("value")
        let typ =e.target.getAttribute("typ")
   
      if(typ=="operator"){
        if(value=="-" && flag==true){
            setNum(value + num)
            if(num.includes("-")){
                setNum(num+"")} 
                console.log(flag)
        }
        else{
        setPrevNum(num + value)
        setNum("")
    }

   
}
flag=false;
        switch(value){
         case "C":
             clear();
             break;
         case "/":
             flag=true;
            op = "/"
             break;
        case "+":
            flag=true;
           op = "+"
            break;
        case "-":
            if(op===""){
            op = "-"
       }flag=true;
          break;
        case "*":
            flag=true;
            op = "*"
            break;
        case "=":
            calculate(op);
            flag=false;
            op=""
            break;
            
        case ".":
            setNum(num + value)
            if(num.includes(".")){
                setNum(num+"")} 
        break;
            
         default:   
        setNum(num + value)
         
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


     
      //  switch(typ){
      //   case "operator":
      //          let p = /\*|\+|\/|\=/gm
      //          setNum(num + value)
      //          if(p.test(num)){
      //             setNum(num+"")} 
      //          break;
      //  } not neccesary anymore
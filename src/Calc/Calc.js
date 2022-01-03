import React, { Component } from 'react/cjs/react.production.min'


import './Calc.css'
import '../components/Layouts/Layout.css'
import Input from '../components/Inputs/Input'
import Buttons from '../components/Layouts/Buttons/Buttons'


class Calculator extends Component{

    state ={
        operator : [],
        operandPrv  : [],
        operandNew  : [],
        OpenAdv     :{
            curr:"none"
        }

    }

    showAdvHandler = () =>{
        if(this.state.OpenAdv !== "openAdv"){
            this.setState({OpenAdv:"openAdv"})
        }else{
            this.setState({OpenAdv:"none"})
        }

        document.querySelector('.myInput').value = "8989080"
    }


    numClickHandler = num =>{
        const anotherEntry = num
        const firstOperand = this.state.operandPrv;
        const secOperand = this.state.operandNew;
        const lastOperator = this.state.operator;

        let myResult = document.querySelector('.myResult').innerHTML

        
        

        
        if(num === "+" || num === "-" || num === "*" || num === "/"){          
            lastOperator[0]=(num);
            firstOperand.length = 0
            if(myResult ===""){
                firstOperand.push(...secOperand)
            }else{
                firstOperand.push(myResult)
            }

            secOperand.length = 0



        }else if( num === "<"){
            secOperand.pop();
        }else{
            secOperand.push(anotherEntry);
        }
        
        document.querySelector('.myInput').value = secOperand.join('')
        

        if(lastOperator.length !== 0){
            console.log(lastOperator[0]+' opp set')
            const myOperator = lastOperator[0]

            let setRez

            if(myOperator === "*"){
                setRez= 
                parseInt(firstOperand.join('')) * parseInt(secOperand.join(''))
            }else if(myOperator === "+"){
                setRez= 
                parseInt(firstOperand.join('')) + parseInt(secOperand.join(''))
            }else if(myOperator === "-"){
                setRez= 
                parseInt(firstOperand.join('')) - parseInt(secOperand.join(''))
            }else if(myOperator === "/"){
                setRez= 
                parseInt(firstOperand.join('')) / parseInt(secOperand.join(''))
            }

            if(isNaN(setRez)){
                document.querySelector('.myResult').innerHTML=firstOperand.join('')+myOperator
            }else{
                console.log(setRez);
                document.querySelector('.myResult').innerHTML = setRez
            }


            document.querySelector('.LastOperation').innerHTML= "Operation: "+
            parseInt(firstOperand.join(''))+myOperator+parseInt(secOperand.join(''))
        }

    }

    operatorActive = ope =>{
        // let calc = parseInt(document.querySelector('.oldTyped').value) + ope +  parseInt(document.querySelector('.myInput').value)
        // if(calc !== NaN){
        //     document.querySelector('.myResult').innerHTML = calc
        // }
        
         
    }

    render(){
       
        return(
            <div className="myCalc">
                <Input />



                <div className="myDownSec">
                    <Buttons 
                        btnFunc_    ={this.numClickHandler} 
                        openAdvStyle={this.state.OpenAdv} 
                        showAdvBtn  ={this.showAdvHandler} 

                    />
                </div>
            </div>
        )
    }
   
}

export default Calculator
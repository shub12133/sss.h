import React, { Component } from "react"
import Userdetails from './userdetails'
import PersonalDetails from './personaldetails'
import Confirm from './confirm'
import Success from "./success"
export class Userform extends Component{
   state={
  step:1,
  username:'',
  firstName:'',
  lastName:'',
  email:'',
 }


 //next step
 nextStep=()=>{
     const { step } = this.state
     this.setState({
         step:step+1
     })
 }


  //previous step
  previousStep=()=>{
    const { step} = this.state
    this.setState({
        step:step-1
    })
}

//handlethe value
handleChange = input => (e) =>{
    console.log(e.target.value)

    this.setState({
        [input]:e.target.value
    })
}


   render(){
    const {step} =this.state
    const {userName,firstname,lastName,email} =this.state
    const values = {userName,firstname,lastName,email}
        
    switch(step){
        case 1:
            return(
                <Userdetails 
               nextStep={this.nextStep}
               handleChange={this.handleChange}
                 values = {values}
                />
            )
            case 2:
                return(
                    <PersonalDetails
                   nextStep={this.nextStep}
                   previousStep={this.previousStep}
                   handleChange={this.handleChange}
                     values = {values}
                    />
                )
                
            case 3:
                return(
                    <Confirm
                   nextStep={this.nextStep}
                   previousStep={this.previousStep}
                     values = {values}
                    />
                )                 
            case 4:
                return <Success/>
                
    }
    
   }
}

export default Userform

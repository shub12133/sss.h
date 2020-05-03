import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class PersonalDetails extends Component{
    
continue =e =>{
    e.preventDefault()
    this.props.nextStep()
}
back =e =>{
    e.preventDefault()
    this.props.previousStep()
}


    render(){
        const {values}= this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Information">  </AppBar>
                   
                  <br/>
                      <TextField
                     hintText="Enter Your First Name"
                     floatingLabelText="Enter Your First Name"
                     onChange={this.props.handleChange('First Name')}
                     defaultValue={values.firstName}
                     ></TextField>
                  <br/>

                      <TextField
                     hintText="Enter your lastName"
                     floatingLabelText="Enter Your Last Name"
                     onChange={this.props.handleChange('Last Name')}
                     defaultValue={values.flastName}
                     ></TextField> 
                  <br/>

                    
                     <RaisedBUtton 
                     label="Continue"
                     primary={true}
                     onClick={this.continue}
                     ></RaisedBUtton>
                   <RaisedBUtton 
                     label="Back"
                     primary={true}
                     onClick={this.back}
                     ></RaisedBUtton>
                  
                </React.Fragment>
            </MuiThemeProvider>
           )
    }

}

export default PersonalDetails
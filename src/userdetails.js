import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class Userdetails extends Component{
    
continue =e =>{
    e.preventDefault()
    this.props.nextStep()
}

    render(){
        
        const {values}= this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Log In Form">  </AppBar>
                    <TextField
                     hintText="Enter Your User Name"
                     floatingLabelText="Enter User Name"
                     onChange={this.props.handleChange('Your User Name')}
                     defaultValue={values.userName}
                     ></TextField>
                  <br/>
        


                     <TextField
                     hintText="Enter your email"
                     floatingLabelText="Enter Your Email ID"
                     onChange={this.props.handleChange(' Your Email ID ')}
                     defaultValue={values.email}
                     ></TextField>
                     <br/>
                     <RaisedBUtton 
                     label="Continue"
                     primary={true}
                     onClick={this.continue}
                     ></RaisedBUtton>
                  
                </React.Fragment>
            </MuiThemeProvider>
           )
    }

}

export default Userdetails

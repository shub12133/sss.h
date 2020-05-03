import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem}  from 'material-ui/List'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class Confirm extends Component{
    
continue =e =>{
    e.preventDefault()
    this.props.nextStep()
}  

back =e =>{
    e.preventDefault()
    this.props.previousStep()
}

    render(){
        const {values:{ userName,firstName,lastName,email}}= this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="confirm user data">  </AppBar>
                    <List>
                        <ListItem 
                        primaryText="firstName"
                        secondaryText={firstName}
                        ></ListItem>

                          <ListItem 
                        primaryText="lastName"
                        secondaryText={lastName}
                        ></ListItem>

                          <ListItem 
                        primaryText="userName"
                        secondaryText={userName}
                        ></ListItem>

                          <ListItem 
                        primaryText="email"
                        secondaryText={email}
                        ></ListItem>

                    </List>
                     <br/>
                     <RaisedBUtton 
                     label="confirm and continue"
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

export default Confirm
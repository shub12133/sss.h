import React,{Component} from 'react'
import mMuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem}  from 'material-ui/List'
import RaisedBUtton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class Success extends Component{
    


    render(){
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="confirm user data">  </AppBar>
                  <h1>succesfuly submitted </h1>
                </React.Fragment>
            </MuiThemeProvider>
           )
    }

}

export default Success
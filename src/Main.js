import React, {Component} from 'react';
// import Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Card, { CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';


import AppBarCheckout from './components/AppBarCheckout.js';
import ProgressBar from './components/ProgressBar.js';
import OrderTable from './components/OrderTable.js';
import ShippingAddressForm from './components/ShippingAddressForm.js';

const styles = {
  container: {
    textAlign: 'center',
  },
  cardContainer: {
    maxWidth: 900,
    margin: '0 auto',
    padding: 20,
  },
  card: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  }
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  
  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    // const standardActions = (
    //   <FlatButton
    //     label="Ok"
    //     primary={true}
    //     onTouchTap={this.handleRequestClose}
    //   />
    // );

    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <AppBarCheckout />
          <ProgressBar style={styles.card} />

          <div style={styles.cardContainer}>
            <Card style={styles.card}>
              <CardTitle title="Your Cart" subtitle="Please review your cart and continue to checkout." />
              <CardText>
                <OrderTable />
              </CardText>
            </Card>
            <Card style={styles.card}>
              <CardTitle title="Ship to" subtitle="Where should we send your order" />
              <ShippingAddressForm />
            </Card>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
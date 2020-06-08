import React from 'react'
import './App.css'
import RaisedBUtton from 'material-ui/RaisedButton'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <h3>Log in </h3>

        <form method="post" action="" data="json">
          <p>Name:</p>
          <input type="text" placeholder="enter your name" onChange={(e) => this.props.enterInfo(this, e, 'name')}/>

          <p>Email:</p>
          <input type="text" placeholder="enter your email?" onChange={(e) => this.props.enterInfo(this, e, 'email')}/>

          <p>Password:</p>
          <input type="text" placeholder="enter your password" onChange={(e) => this.props.enterInfo(this, e, 'password')}/>

          <br />
          <br />
          <button onClick={(e) => this.props.goFormTwo(e, this.state)}>Next</button>
          
          
        </form>

      </div>
    )
  }
}

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Shipping Info</h3>
        <form method="post" action="" data="json">

          <p>Address Line 1 </p>
            <input type="text" placeholder="enter street address" onChange={(e) => this.props.enterInfo(this, e, 'street')}/>

          <p>Address Line 2</p>
            <input type="text" placeholder="enter your house number" onChange={(e) => this.props.enterInfo(this, e, 'apartment')}/>

          <p>City:</p>
            <input type="text" placeholder="enter your citry" onChange={(e) => this.props.enterInfo(this, e, 'city')}/>

          <p>State:</p>
            <input type="text" placeholder="enter your state" onChange={(e) => this.props.enterInfo(this, e, 'state')}/>

          <p>Zip Code:</p>
            <input type="text" placeholder="enter zip code " onChange={(e) => this.props.enterInfo(this, e, 'zipCode')}/>

          <p>Phone Number:</p>
            <input type="text" placeholder="enter phone number" onChange={(e) => this.props.enterInfo(this, e, 'phone')}/>

          <br />
          <br />
          <button onClick={this.props.goFormThree}>Next!</button>
          <button onClick={this.props.history.goBack()}>back!</button>

        </form>
      </div>
    )
  }
}

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Payment Info </h3>
        <form method="post" action="" data="json">

          <p>Credit Card Number:</p>
            <input type="text" placeholder="credit card number" onChange={(e) => this.props.enterInfo(this, e, 'cardNumber')}/>

          <p>Credit Card Exp. Date:</p>
            <input type="text" placeholder="exp date ?" onChange={(e) => this.props.enterInfo(this, e, 'expDate')}/>

          <p>CVV </p>
            <input type="text" placeholder="c.v.v ?" onChange={(e) => this.props.enterInfo(this, e, 'cvv')}/>


          <br />
          <br />
          <button onClick={this.props.goFormFour}>Next!</button>
          <button onClick={this.props.back}>back!</button>

        </form>
      </div>
    )
  }
}

class PurchasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Checkout Page</h3>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.email}</li>
          <li>{this.props.password}</li>
          <li>{this.props.street}</li>
          <li>{this.props.apartment}</li>
          <li>{this.props.city}</li>
          <li>{this.props.state}</li>
          <li>{this.props.zipCode}</li>
          <li>{this.props.phone}</li>
          <li>{this.props.cardNumber}</li>
          <li>{this.props.expDate}</li>
          <li>{this.props.cvv}</li>
        </ul>
        <button onClick={this.props.sendData}>Checkout!</button>
        
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      street: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      billingZip: '',
      displayedPage: 1
    }
  }

  goFormTwo(e) {
    e.preventDefault();
    console.log('Going to form TWO!')
    var nextPage = 2;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  goFormThree(e) {
    e.preventDefault();
    console.log('Going to form THREE!')
    var nextPage = 3;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  goFormFour(e) {
    e.preventDefault();
    console.log('Going to form FOUR!')
    var nextPage = 4;
    this.setState({
      displayedPage: nextPage
    });
    return;
  }

  enterInfo(e, datum) {
    var property = arguments[2];
    var event = arguments[1];
    this.setState({
      [property]: event.target.value
    });
  }

  sendData(e) {
    e.preventDefault();
    console.log('Sending user data!');
    
    return;
  }

  render() {
    if (this.state.displayedPage === 1) {
      return (<BasicInfo goFormTwo={this.goFormTwo.bind(this)} enterInfo={this.enterInfo.bind(this)}/>)
    }  
    if (this.state.displayedPage === 2) {
      return (<ShippingInfo goFormThree={this.goFormThree.bind(this)} enterInfo={this.enterInfo.bind(this)}/>)
    } else
    if (this.state.displayedPage === 3) {
      return (<PaymentInfo goFormFour={this.goFormFour.bind(this)} enterInfo={this.enterInfo.bind(this)}/>)
    }
    if (this.state.displayedPage === 4) {
      return (<PurchasePage sendData={this.sendData.bind(this)} name={this.state.name} email={this.state.email} password={this.state.password} street={this.state.street} apartment={this.state.apartment} city={this.state.city} state={this.state.state} zipCode={this.state.zipCode} phone={this.state.phone} cardNumber={this.state.cardNumber} expDate={this.state.expDate} cvv={this.state.cvv} billingZip={this.state.billingZip}/>)
    }
    return
  }
}

export default App
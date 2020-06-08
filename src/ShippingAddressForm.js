import React from 'react';
import TextField from 'material-ui/TextField';

// TODO: use this place autoComplete
// https://github.com/ubilabs/react-geosuggest

const ShippingAddressForm = () => (
  <div>
    <TextField
        hintText="John Smith"
        floatingLabelText="Name"
        autoComplete="name" /* this does not work yet!! - find a new implementation */
        required
      /><br/>
    <TextField
        hintText="123 Main St, Apt 2"
        floatingLabelText="Address"
        autoComplete="shipping street-address"
        required
      /><br/>
    <TextField
        hintText="Anaheim"
        floatingLabelText="City"
        autoComplete="shipping address-level1"
        required
        style = {{width: '140'}}
      />
    <TextField
        hintText="CA"
        floatingLabelText="State"
        autoComplete="shipping address-level2"
        required
        style = {{width: '50'}}
      />
    <TextField
        hintText="55555"
        floatingLabelText="Zip"
        autoComplete="shipping postal-code"
        required
        style = {{width: '65'}}
      />
  </div>
);

export default ShippingAddressForm;
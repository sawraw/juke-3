import React, {Component} from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ccn: props.initialInfo.ccn || '',
      type: props.initialInfo.type || 'Visa',
      ccv: props.initialInfo.ccv || '',
      submitted: false
    };
    this.handleCreditCardNumberChange = this.handleCreditCardNumberChange.bind(this);
    this.handleCreditCardTypeChange = this.handleCreditCardTypeChange.bind(this);
    this.handleCCVChange = this.handleCCVChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreditCardNumberChange(event) {
    const theValueInTheInput = event.target.value;
    if (theValueInTheInput.length > 16) {
      return;
    }
    this.setState({
      ccn: theValueInTheInput
    });
  }

  handleCreditCardTypeChange(event) {
    const theValueInTheSelectInput = event.target.value;
    this.setState({
      type: theValueInTheSelectInput
    });
  }

  handleCCVChange(event) {
    const theValue = event.target.value;
    this.setState({
      ccv: theValue
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.ccn.length !== 16) {
      this.setState({
        submitted: true
      })
      return;
    }
    this.props.whenSubmitted(this.state);
  }

  render() {
    return (
      <form id="credit-card-form" onSubmit={this.handleSubmit}>
        <h2>Enter your payment information</h2>
        <div>
          {this.state.ccn.length !== 16 && this.state.submitted
            ? <span style={{ color: 'red' }}>Your credit card number must be 16 characters</span>
            : null}
          <label className="form-label">CCN</label>
          <input
            className="form-input"
            type="text"
            name="ccn"
            onChange={this.handleCreditCardNumberChange}
            value={this.state.ccn}
          />
        </div>
        <div>
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            onChange={this.handleCreditCardTypeChange}
            value={this.state.type}
          >
            <option>Visa</option>
            <option>Mastercard</option>
            <option>American Express</option>
            <option>Discover</option>
          </select>
        </div>
        <div>
          <label className="form-label">CCV</label>
          <input
            className="form-input"
            type="text"
            name="ccv"
            onChange={this.handleCCVChange}
            value={this.state.ccv}
          />
        </div>
        <button type="submit" className="btn btn-primary mt">Place Order</button>
      </form>
    );
  }

}
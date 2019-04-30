import React from 'react';
import Option from './Option.js';
import $ from 'jquery';

class Convertor extends React.Component {
  state = {
    fromCurrency: 'dollar',
    currencies: ['dollar','toman','rial','euro']
  };

  //changes the currency we enter / (on dropdown select)
  onCurrencyChange = (e) => {
    const fromCurrency = e.target.value;
    this.setState(() => ({fromCurrency}));
  };

  render() {
    return (
      <div className="container ">

      <div className="borders">
      <div className="margins">
      <div className="row">
      <div className="col-md-6">
      <form>
      <div className="row " >
      <div className="col-md-6 col-xs-12 margin1">
              <input type="text" onChange={this.props.onNumberChange} />
              </div>
              <div className="col-md-3 col-xs-12 margin1">
              <select name="currency" value={this.state.fromCurrency} onChange={this.onCurrencyChange}>
                {this.state.currencies.map((cur) => (<option  key={cur}>{cur}</option>))}
        </select>
              </div>
              </div>
            </form>
      </div>
      <div className="col-md-6">
            <p>
            {
            this.props.number && this.state.fromCurrency === 'dollar' && this.props.dollar.map(
              (dollar) => (<Option key={dollar.currency} currency={dollar.currency} amount={dollar.amount * this.props.number} />)
              )
            }
            {
              this.props.number && this.state.fromCurrency === 'toman' && this.props.toman.map(
                (toman) => (<Option key={toman.currency} currency={toman.currency} amount={toman.amount * this.props.number} />)
                )
            }
            {
              this.props.number && this.state.fromCurrency === 'rial' && this.props.rial.map(
                (rial) => (<Option key={rial.currency} currency={rial.currency} amount={rial.amount * this.props.number} />)
                )
            }
            {
              this.props.number && this.state.fromCurrency === 'euro' && this.props.euro.map(
                (euro) => (<Option key={euro.currency} currency={euro.currency} amount={euro.amount * this.props.number} />)
                )
            }
        </p>
        </div>
        </div>
        </div>
        </div>
    </div>
    )
  }
}

export default Convertor;

import React from 'react';
import Dollar from './Dollar';
import Euro from './Euro';
import Toman from './Toman';
import Rial from './Rial';

class Setting extends React.Component {
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
            <div>
            <div className="container">

            <div className="margins">
            <div className="borders">
            <div className="row">
            <div className="col-sm-6">
            
               <p>
               From : <select name="currency" value={this.state.fromCurrency} onChange={this.onCurrencyChange}>
               {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
               </select>
               </p>
               </div>
               <div className="col-sm-6">
          
          {
             (this.state.fromCurrency === 'dollar' && <Dollar onToAmount_d={this.props.onToAmount_d} onToCurrency={this.props.onToCurrency}/>) ||
             (this.state.fromCurrency === 'euro' && <Euro onToAmount_e={this.props.onToAmount_e} onToCurrency={this.props.onToCurrency}/>) ||
             (this.state.fromCurrency === 'toman' && <Toman onToAmount_t={this.props.onToAmount_t} onToCurrency={this.props.onToCurrency}/>) ||
             (this.state.fromCurrency === 'rial' && <Rial onToAmount_r={this.props.onToAmount_r} onToCurrency={this.props.onToCurrency}/>)
          }
          </div>

          </div>
          </div>
          </div>
          </div>
          </div>
        );
        }








}

export default Setting;

import React from 'react';

class Toman extends React.Component {

   state = {
      toCurrency: 'dollar',
      currencies: ['', 'dollar','rial','euro']
   }

   onCurrencyChange = (e) => {
      const toCurrency = e.target.value;
      this.setState(() => ({toCurrency}));
      this.props.onToCurrency();

    };

   render() {
      return (
         <div>
            <form className="To">To :
            <input type="number" onChange={this.props.onToAmount_t} />
            <select name="currency" onChange={this.props.onToCurrency}>
            {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
            </select>
            </form>
         </div>
      );
   }
}

export default Toman;
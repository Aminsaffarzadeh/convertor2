import React from 'react';

class Euro extends React.Component {

   state = {
      toCurrency: 'dollar',
      currencies: ['', 'toman','rial','dollar']
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
            <input type="number" onChange={this.props.onToAmount_e} />
            <select name="currency" onChange={this.props.onToCurrency}>
            {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
            </select>
            </form>
         </div>
      );
   }
}

export default Euro;
//Dollar, Toman and ...
//are placed after the 
//form in render() based on
//the value of select tag
//in setting component

import React from 'react';

class Dollar extends React.Component {

   state = {
      toCurrency: 'toman',
      currencies: ['','toman','rial','euro']
   }

   render() {
      return (
         <div>
            <form className="To">To: &nbsp;
            <input type="number" onChange={this.props.onToAmount_d} />
            &nbsp;
            <select name="currency" onChange={this.props.onToCurrency}>
            {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
            </select>
            </form>

         </div>
      );
   }
}

export default Dollar;
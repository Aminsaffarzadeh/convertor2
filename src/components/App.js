import React from 'react';
import Convertor from './Convertor';
import Setting from './Setting';
import NavBar from './NavBar';
import { Switch,BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

//App.js is the main JS file
class App extends React.Component {

  state = {
    //the input, user enters
    number: '',
    //it's the destination currency
    toCurrency: '',
    //available currency
    currencies: ['dollar', 'toman', 'euro', 'rial'],

    //fromCurrencies
    fromDollar: [
      //0
      {
        currency: 'dollar',
        amount: 1
      },
      //1
      {
        currency: 'toman',
        amount: 14000
      },
      //2
      {
        currency: 'rial',
        amount: 140000
      },
      //3
      {
        currency: 'euro',
        amount: 0.9
      }
    ],
    fromToman: [
      {
        currency: 'dollar',
        amount: 0.0000714
      },
      {
        currency: 'toman',
        amount: 1
      },
      {
        currency: 'rial',
        amount: 10
      },
      {
        currency: 'euro',
        amount: 0.0000625
      }
    ],
    fromRial: [
      {
        currency: 'dollar',
        amount: 0.00000714
      },
      {
        currency: 'toman',
        amount: 0.1
      },
      {
        currency: 'rial',
        amount: 1
      },
      {
        currency: 'euro',
        amount: 0.00000625
      }
    ],
    fromEuro: [
      {
        currency: 'dollar',
        amount: 1.12
      },
      {
        currency: 'toman',
        amount: 16000
      },
      {
        currency: 'rial',
        amount: 160000
      },
      {
        currency: 'euro',
        amount: 1
      }
	  ]
  };

    //sets the number state from converter
    onNumberChange = (e) => {
      let number = e.target.value;
      this.setState(() => ({
        number
      }));
    }

    //sets the toCurrency state from setting
    onToCurrency= (e) => {
      let toCurrency = e.target.value;
      this.setState(() => ({
        toCurrency
      }));
    }

    //changes the amount(state) of dollar
    onToAmount_d = (e) => {
      let amount = e.target.value;
      if(this.state.toCurrency === 'toman') {
        const neww = this.state.fromDollar.slice();
        neww[1].amount = amount;
        this.setState(() => ({
          fromDollar: neww
        }));
      }else if(this.state.toCurrency === 'rial'){
        const neww = this.state.fromDollar.slice();
        neww[2].amount = amount;
        this.setState(() => ({
          fromDollar: neww
        }));
      }else if(this.state.toCurrency === 'euro'){
        const neww = this.state.fromDollar.slice();
        neww[3].amount = amount;
        this.setState(() => ({
          fromDollar: neww
        }));
      }
    }

    //changes the amount(state) of toman
    onToAmount_t = (e) => {
      let amount = e.target.value;
      if(this.state.toCurrency === 'dollar') {
        const neww = this.state.fromToman.slice();
        neww[0].amount = amount;
        this.setState(() => ({
          fromToman: neww
        }));
      }else if(this.state.toCurrency === 'rial'){
        const neww = this.state.fromToman.slice();
        neww[2].amount = amount;
        this.setState(() => ({
          fromToman: neww
        }));
      }else if(this.state.toCurrency === 'euro'){
        const neww = this.state.fromToman.slice();
        neww[3].amount = amount;
        this.setState(() => ({
          fromToman: neww
        }));
      }
    }

    //changes the amount(state) of rial
    onToAmount_r = (e) => {
      let amount = e.target.value;
      if(this.state.toCurrency === 'dollar') {
        const neww = this.state.fromRial.slice();
        neww[0].amount = amount;
        this.setState(() => ({
          fromRial: neww
        }));
      }else if(this.state.toCurrency === 'toman'){
        const neww = this.state.fromRial.slice();
        neww[1].amount = amount;
        this.setState(() => ({
          fromRial: neww
        }));
      }else if(this.state.toCurrency === 'euro'){
        const neww = this.state.fromRial.slice();
        neww[3].amount = amount;
        this.setState(() => ({
          fromRial: neww
        }));
      }
    }

    //changes the amount(state) of euro
    onToAmount_e = (e) => {
      let amount = e.target.value;
      if(this.state.toCurrency === 'dollar') {
        const neww = this.state.fromEuro.slice();
        neww[0].amount = amount;
        this.setState(() => ({
          fromEuro: neww
        }));
      }else if(this.state.toCurrency === 'rial'){
        const neww = this.state.fromEuro.slice();
        neww[1].amount = amount;
        this.setState(() => ({
          fromEuro: neww
        }));
      }else if(this.state.toCurrency === 'euro'){
        const neww = this.state.fromEuro.slice();
        neww[2].amount = amount;
        this.setState(() => ({
          fromEuro: neww
        }));
      }
    }




  render() {
    return (
      <div className="bodys">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/" exact={true}
            render = {() => (
              <Convertor
                onNumberChange={this.onNumberChange}
                number={this.state.number}
                dollar={this.state.fromDollar}
                toman={this.state.fromToman}
                euro={this.state.fromEuro}
                rial={this.state.fromRial}
              />)}
          />
          <Route path="/setting"
            render = {()=> (
              <Setting
                onToAmount_d={this.onToAmount_d}
                onToAmount_t={this.onToAmount_t}
                onToAmount_r={this.onToAmount_r}
                onToAmount_e={this.onToAmount_e}
                onToCurrency={this.onToCurrency}

                />)}
              />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
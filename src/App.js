import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {









  render() {
    return (
      <div className="App">
          <div className="custom">

    <div className="main2">
            <div className="cir"></div>
            <div className="cir"></div>
            <div className="cir"></div>
        </div>


    <nav>
    <div className="box">
        <form>
            <input type="text" name="" placeholder="Type..." className="inp"/>
            <input type="submit" name="" value="Search" className="inp"/>
        </form>
    </div>
    <ul className="menu">
        <li><a href="a">amin</a></li>
        <li><a href="a">About</a></li>
        <div>
        <li><a href="a">Services</a></li>
        <li><a href="a">Profile</a></li>
        <li><a href="a">Cars</a></li>
        </div>
    </ul>
    </nav>
    </div>




        <nav className="nav">

           <ul>
               <button type="button">Home</button>
               <button type="button">About</button>
               <button type="button">Cars</button>
               <button type="button">Profile</button>
           </ul>

       </nav>




              <div className="timer"></div>
            <ul className="ul">
                <li className="li" style={{background:"red"}}></li>
                <li className="li" style={{background:"blue"}}></li>
                <li className="li" style={{background:"brown"}}></li>
                <li className="li" style={{background:"yellow"}}></li>
            </ul>







      </div>
    );
  }






  componentDidMount(){


    var ulEl=document.querySelector(".ul"),
        liEls=ulEl.querySelectorAll(".li"),
        liElsCount=liEls.length,
        counter=0;
        liEls[0].style.opacity=1;
         var timerEl=document.querySelector(".timer");
    timerEl.classList.add("timerIn");





        setInterval(function(){
            for(var i=0;i<liElsCount;i++){

            liEls[i].style.opacity=0;

        }
             timerEl.classList.remove("timerIn");
          counter++;
            if(counter==liElsCount){
            counter=0;
        }
         setTimeout(function(){


                 liEls[counter].style.opacity=1;
              timerEl.classList.add("timerIn");
             timerEl.style.animationDuration="3s";
         },100)


        },4000)







  }














}

export default App;








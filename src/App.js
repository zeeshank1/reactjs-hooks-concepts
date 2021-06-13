import React, { useState } from "react";

//import logo from './logo.svg';
//import './App.css';


//1st way
function intializeState(){
  console.log('Run Intialize Function ALWAYS');
  return 4;
}

function App() {

  //1st way to intialize state and it will call every time function is called
  //const [count, setCount] = useState(intializeState());

  //2nd way to intialize state and it will call only once like state in class component
  // const [count, setCount] = useState(()=>{
  //   console.log('Run Intialize Function Once');
  //   return 4;
  // });

  //3rd way handling state for objects
  const [state, setState]=  useState({ count : 4, theme : 'blue'})
  const count = state.count;
  const theme = state.theme;

  //3rd way,
  //we need to add the other properties of object i.e., theme, unlike Class component, useState did not merge the object, it override the object, therefore if we will not add remaining properties they will be lost after this function call 
  function decrementCounter() {
    setState(prevState => {
       return {
         ...prevState, //adding previous object old values, they do not merge automatically,
         //TIP : Better or preffered way to use seprate useStates one for count and one for theme
         count : prevState.count-1,
       }
    })
  }

  //2nd way 
  // function decrementCounter(){
  //   //Preferred way to decrement value
  //   setCount((prevCount) => prevCount-1);
    
  //   //If we use below approach to setcount then calling same method twice will not have the expected result i.e., decrementing value by 2
  //   // setCount(count-1);
  //   // setCount(count-1);
  // }

  //1st way 
  // function incrementCounter() {
  //   setCount(count+1)
  //   //If we use below approach to setcount then calling same method twice will not have the expected result i.e., incrementing value by 2
  //   // setCount(count+1);
  //   // setCount(count+1);
  // }

  function incrementCounter() {
  setState(prevState => {
    return {
      ...prevState,
      count : prevState.count+1,
    }
  })
  }
  return (
    <>
    <button onClick={decrementCounter}>-</button>
    <span>{state.count}</span>
    <span>{theme}</span>
    <button onClick={incrementCounter}>+</button>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

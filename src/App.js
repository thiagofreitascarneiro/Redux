import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn, multiply, result } from './actions';


function App() {
  const counter = useSelector( state => state.counter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();
  const numero = 0

  return (
    <div className='App'>
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment())}> + </button>
      
      <button onClick={() => dispatch(decrement())}> - </button>

      <br/>
      <input 
      type={'number'}
      
      onChange={(e) => dispatch(multiply(e.target.value))}>

      </input>
      <button onClick={() => dispatch(result())}> x </button>

    <h3>Log in {isLogged}</h3>
    <button onClick={() => dispatch(logIn())}> sign in</button>
      {isLogged ? <h3>Welcome Bob Dylan </h3> : ''}
      
    </div>
  );
}

export default App;

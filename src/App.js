import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn, multiply, result, zero } from './actions';
import { useState } from 'react';

function App() {
  const counter = useSelector( state => state.counter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState(2);


  return (
    <div className='App'>
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment())}> + </button>
      
      <button onClick={() => dispatch(decrement())}> - </button>

      <h4>Digite um número para multiplicar</h4>
      
      <br/>
      <input 
      type={'number'}
      value={valueInput}
      onChange={(e) => dispatch(multiply(e.target.value))}>
       
      </input>

      <button onClick={() => dispatch(result(valueInput))}
      > x </button>

      <br/>
      <br/>
      <button onClick={() => dispatch(zero())}> Zerar counter</button>

    <h3>Log in {isLogged}</h3>
    <button 
    onClick={() => dispatch(logIn())}> sign in</button>
      {isLogged ? <h3>Welcome Bob Dylan </h3> : ''}
      
    </div>
  );
}

export default App;

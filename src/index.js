import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>, document.getElementById('root')
)


//===== the below code is for the REDUX counter========//
/*
import reducer from './indexReducer';
import App from './App';
import './index.css';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)
*/

//==================== Below code is used to simplify the process of Redux =============//
/*
import React, { useReducer } from "react";
import ReactDOM from 'react-dom';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};
 
const App = () => {
    // Initialising useReducer hook
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>
        add
      </button>
      <button onClick={() => dispatch("subtract")}>
        subtract
      </button>
      <button onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));
*/
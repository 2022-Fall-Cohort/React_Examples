import { useState } from 'react';

export default function App() {
  console.log('App Rendered');
  const [state, setState] = useState({ count: 4, theme: 'blue' }); // Right Way

  const count = state.count;
  const theme = state.theme;

  // Right Way
  // function decrementCount() {
  //   setState((prevState) => {
  //     return { ...prevState, count: prevState.count - 1 };
  //   });
  // }
  // function incrementCount() {
  //   setState((prevState) => {
  //     return { ...prevState, count: prevState.count + 1 };
  //   });
  // }

  // Wrong way
  function decrementCount() {
    setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

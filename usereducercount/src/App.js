import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  console.log('App Rendered');
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function decrementCount() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  function incrementCount() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

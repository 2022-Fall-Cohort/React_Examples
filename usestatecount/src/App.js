import { useState } from 'react';

function countInitial() {
  console.log('countInitial');
  return 4;
}

export default function App() {
  console.log('App Rendered');
  // const [count, setCount] = useState(countInitial()); // Wrong Way
  const [count, setCount] = useState(() => countInitial()); // Right Way

  // Right Way
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  // Wrong way
  // function decrementCount() {
  //   setCount(count - 1);
  //   setCount(count - 1);
  // }

  // function incrementCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

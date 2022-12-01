import React, { useState, useCallback } from 'react';
// import React, { useState } from 'react';
import List from './List';

export default function App() {
  console.log('App Rendered');
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = (incrementor) => {
  //   return [
  //     number + incrementor,
  //     number + 1 + incrementor,
  //     number + 2 + incrementor,
  //   ];
  // };

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          if (e.target.value === '') {
            setNumber(1);
          } else {
            setNumber(parseInt(e.target.value));
          }
        }}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

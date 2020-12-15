import React, { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Click counter</h1>

      <button
        onClick={() => {
          console.log('>>> click');
          setCount(count + 1);
        }}
      >
        Click me
      </button>

      <p>You clicked {count} times.</p>
    </main>
  );
}

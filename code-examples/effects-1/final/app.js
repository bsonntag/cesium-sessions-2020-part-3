import React, { useEffect, useState } from 'react';

export function App() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem('count'), 10) ?? 0;
  });

  const [isRequestingAttention, setRequestingAttention] = useState(false);

  useEffect(() => {
    localStorage.setItem('count', count);
  });

  useEffect(() => {
    console.log('effect', { count, isRequestingAttention });

    const timeout = setTimeout(() => {
      console.log('>>> timeout', count);
      setRequestingAttention(true);
    }, 1000);

    return () => {
      console.log('effect cleanup', count);
      clearTimeout(timeout);
    };
  }, [count, isRequestingAttention]);

  return (
    <main>
      <h1>Click counter</h1>

      <button
        onClick={() => {
          console.log('>>> click');
          setCount(count + 1);
          setRequestingAttention(false);
        }}
        style={{
          color: isRequestingAttention ? 'red' : null,
        }}
      >
        Click me
      </button>

      <p>You clicked {count} times.</p>

      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
}

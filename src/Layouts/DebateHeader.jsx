import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
}, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>The current time is: {time.toLocaleTimeString()}</p>;
    </div>
  );
}

export default Counter;
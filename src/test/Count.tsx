"use client";

const CountNumber = ({ count, setCount }: any) => {
  console.log("CountNumber");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CountNumber;

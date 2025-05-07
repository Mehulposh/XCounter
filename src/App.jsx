import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const handleClick = (sign) => {
    setCount((prevCount) => (sign === '+' ? prevCount + 1 : prevCount - 1));
  };

  return (
    <>
      <h1>Counter App</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => (
          handleClick('+')
        )}>Increment</button>
        <button onClick={()=> (
          handleClick('-')
        )}>Decrement</button>
      </div>
    </>
  )
}

export default App


import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app">
      <h1>Welcome to My React App</h1>

      <p>This is my first TSX application.</p>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;

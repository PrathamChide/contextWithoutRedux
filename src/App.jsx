import { useState } from "react";
import "./App.css";
import CounterContext from "./context/counterContext";
import { GrandParent } from "./components/grandParent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="App">
        <GrandParent />
        <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
      </div>
    </CounterContext.Provider>
  );
}

export default App;

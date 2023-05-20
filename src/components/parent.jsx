import React, { useContext } from "react";
import { Child } from "./child";
import CounterContext from "../context/counterContext";

function Parent() {
  const { setCount } = useContext(CounterContext);
  return (
    <div>
      <div>Parent</div>
      <button
        onClick={() => {
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        Parent on Increment
      </button>
      <Child />
    </div>
  );
}

export default Parent;

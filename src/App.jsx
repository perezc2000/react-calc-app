/* eslint no-eval: 0 */
import React, { useState } from "react";
import _words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./styles.css";

const App = () => {
  const [stack, setStack] = useState("");

  const items = _words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1].toString() : "0";

  const onClickNumberFunction = (number) => {
    setStack(`${stack}${number}`);
  };

  const onClickOperationFunction = (operation) => {
    setStack(`${stack}${operation}`);
  };

  const onClickEqualFunction = (text) => {
    const newStack = eval(stack).toString();
    setStack(newStack);
  };

  const onContentClearFunction = () => {
    setStack("");
  };

  const onDeleteFunction = () => {
    if (stack.length > 0) {
      const newStack = stack.slice(0, stack.length - 1);
      setStack(newStack);
    }
  };

  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers onClickNumber={onClickNumberFunction} />
      <Functions
        onContentClear={onContentClearFunction}
        onDelete={onDeleteFunction}
      />
      <MathOperations
        onClickOperation={onClickOperationFunction}
        onClickEqual={onClickEqualFunction}
      />
    </main>
  );
};

export default App;

import React, { useEffect, useReducer } from "react";
import Button from "./Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "addDecimal": {
      if (!state.value1) {
        return { ...state, value1: "0.", display: "0." };
      } else if (state.value1 && !state.operator) {
        return {
          ...state,
          value1: state.value1 + ".",
          display: state.value1 + ".",
        };
      } else if (state.operator && !state.value2) {
        return { ...state, value2: "0.", display: "0." };
      } else if (state.value2 && !state.value2.includes(".")) {
        return {
          ...state,
          value2: state.value2 + ".",
          display: state.value2 + ".",
        };
      }
      return state;
    }
    case "toggle": {
      let result;
      if (state.value1 && !state.operator) {
        result = parseFloat(-state.value1);
        return {
          ...state,
          value1: result,
          value2: null,
          operator: null,
          display: result,
        };
      } else if (state.value1 && state.operator && !state.value2) {
        result = parseFloat(-state.value1);
        return {
          ...state,
          value1: result,
          value2: null,
          operator: null,
          display: result,
        };
      } else if (state.value1 && state.operator && state.value2) {
        result = parseFloat(-state.value2);
        return {
          ...state,
          value1: result,
          value2: null,
          operator: null,
          display: result,
        };
      }
    }
    case "allClear": {
      return {
        ...state,
        value1: null,
        value2: null,
        operator: null,
        display: "00",
      };
    }
    case "clear": {
      if (state.value2) {
        return { ...state, value2: null, display: state.operator };
      } else if (state.operator) {
        return { ...state, operator: null, display: state.value1 };
      } else {
        return { ...state, value1: null, display: "00" };
      }
    }
    case "setValue1": {
      return { ...state, value1: action.payload, display: action.payload };
    }
    case "setOperator": {
      return { ...state, operator: action.payload, display: action.payload };
    }
    case "setValue2": {
      return { ...state, value2: action.payload, display: action.payload };
    }
    case "calculate": {
      let result = 0;

      if (!state.value1 && !state.operator && !state.value2) {
        throw new Error("please provide correct input");
      }
      if (state.operator == "+") {
        result = parseFloat(state.value1) + parseFloat(state.value2);
        return {
          ...state,
          value1: null,
          operator: null,
          value2: null,
          display: result,
        };
      } else if (state.operator == "-") {
        result = parseFloat(state.value1) - parseFloat(state.value2);
        return {
          ...state,
          value1: null,
          operator: null,
          value2: null,
          display: result,
        };
      } else if (state.operator == "*") {
        result = parseFloat(state.value1) * parseFloat(state.value2);
        return {
          ...state,
          value1: null,
          operator: null,
          value2: null,
          display: result,
        };
      } else if (state.operator == "÷") {
        if (parseFloat(state.value2) == 0) {
          result = "infinite";
          return {
            ...state,
            value1: null,
            operator: null,
            value2: null,
            display: result,
          };
        }
        result = parseFloat(state.value1) / parseFloat(state.value2);
        return {
          ...state,
          value1: null,
          operator: null,
          value2: null,
          display: result,
        };
      } else if (state.operator == "%") {
        result = parseFloat(state.value1) % parseFloat(state.value2);
        return {
          ...state,
          value1: null,
          operator: null,
          value2: null,
          display: result,
        };
      }
    }
  }
};

const Display = () => {
  const [state, dispatch] = useReducer(reducer, {
    value1: null,
    value2: null,
    operator: null,
    display: "00",
  });

  useEffect(() => {
    console.table(state);
  }, [state]);

  const handleButtonClicked = (value) => {
    if (typeof value === "number") {
      if (!state.operator) {
        dispatch({
          type: "setValue1",
          payload: state.value1 ? `${state.value1}${value}` : `${value}`,
        });
      } else {
        dispatch({
          type: "setValue2",
          payload: state.value2 ? `${state.value2}${value}` : `${value}`,
        });
      }
    } else if (!state.operator && ["+", "-", "*", "÷", "%"].includes(value)) {
      dispatch({ type: "setOperator", payload: value });
    } else if (value == "+/-") {
      dispatch({ type: "toggle" });
    } else if (value == ".") {
      dispatch({ type: "addDecimal" });
    }
  };

  const clearHandler = () => {
    dispatch({ type: "clear" });
  };

  const allClearHandler = () => {
    dispatch({ type: "allClear" });
  };

  const calculate = () => {
    dispatch({ type: "calculate" });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="bg-display h-1/6 w-1/3 text-white font-semibold text-2xl text-right flex flex-col justify-between items-stretch border border-white p-4 overflow-hidden">
        <div className="">{state.display}</div>
      </div>
      <div className="w-1/3 h-1/2 grid grid-cols-4 grid-rows-5 border border-white">
        <Button value={"AC"} color={"bg-slate"} onclick={allClearHandler} />
        <Button
          value={"+/-"}
          color={"bg-slate"}
          onclick={handleButtonClicked}
        />
        <Button value={"%"} color={"bg-slate"} onclick={handleButtonClicked} />
        <Button
          value={"+"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={7} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={8} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={9} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"*"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={4} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={5} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={6} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"-"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={3} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={2} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={1} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"÷"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={0} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"."} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"C"} color={"bg-gray"} onclick={clearHandler} />
        <Button value={"="} color={"bg-equal"} onclick={calculate} />
      </div>
    </div>
  );
};

export default Display;

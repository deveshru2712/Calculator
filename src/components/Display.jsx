import React, { useReducer } from "react";
import Button from "./Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "setValue1": {
      return { ...state, value1: action.payload, display: action.payload };
    }
    case "setOperator": {
      return { ...state, operator: action.payload, display: action.payload };
    }
    case "setValue2": {
      return { ...state, value2: action.payload, display: action.payload };
    }
    case "clear": {
      if (state.value2) {
        return { ...state, value2: null };
      } else if (state.operator) {
        return { ...state, operator: null };
      } else {
        return { ...state, value1: null, display: null };
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
    case "setDisplay": {
      return { ...state, state, display: action.payload };
    }
    default:
      throw new Error("a error occured");
  }
};

const Display = () => {
  const [state, dispatch] = useReducer(reducer, {
    value1: null,
    value2: null,
    operator: null,
    display: "00",
  });

  const handleButtonClicked = (value) => {
    if (!state.value1) {
      dispatch({ type: "setValue1", payload: value });
    } else if (!state.operator) {
      dispatch({ type: "setOperator", payload: value });
    } else if (!state.value2) {
      dispatch({ type: "setValue2", payload: value });
    }
  };

  const clearHandler = () => {
    dispatch({ type: "clear" });
  };

  const allClearHandler = () => {
    dispatch({ type: "allClear" });
  };

  const calculate = () => {};

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
          value={"/"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={"7"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"8"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"9"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"*"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={"4"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"5"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"6"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"-"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={"3"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"2"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"1"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button
          value={"÷"}
          color={"bg-buttonOrange"}
          onclick={handleButtonClicked}
        />

        <Button value={"0"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"."} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"C"} color={"bg-gray"} onclick={clearHandler} />
        <Button value={"="} color={"bg-equal"} onclick={calculate} />
      </div>
    </div>
  );
};

export default Display;

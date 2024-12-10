import React, { useReducer, useState } from "react";
import Button from "./Button";

const reducer = (state, action) => {};

const Display = () => {
  const [currentOperannd, setCurrentOperand] = useState(0);
  const [previousOperand, setPreviousOperand] = useState(0);

  const [state, dispatch] = useReducer(reducer, currentOperannd);

  const handleButtonClicked = (value) => {
    setCurrentOperand(value);
  };

  const allClearHandler = () => {
    setCurrentOperand(0);
    setPreviousOperand(0);
  };

  const calculate = () => {
    setPreviousOperand(currentOperannd);
    setCurrentOperand(0);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="bg-display h-1/6 w-1/3 text-white font-semibold text-2xl text-right flex flex-col justify-between items-stretch border border-white p-4 overflow-hidden">
        <div className="post">{previousOperand}</div>
        <div className="current">{currentOperannd}</div>
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
        <Button value={"C"} color={"bg-gray"} onclick={handleButtonClicked} />
        <Button value={"="} color={"bg-equal"} onclick={calculate} />
      </div>
    </div>
  );
};

export default Display;

import React from "react";
import Button from "./Button";

const Display = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="bg-display h-1/6 w-1/3 text-white font-semibold text-2xl text-right flex flex-col justify-between items-stretch border border-white p-4">
        <div className="post"></div>
        <div className="current">00</div>
      </div>
      <div className="w-1/3 h-1/2 grid grid-cols-4 grid-rows-5 border border-white">
        <Button value={"AC"} color={"bg-gray"} />
        <Button value={"+/-"} color={"bg-gray"} />
        <Button value={"%"} color={"bg-gray"} />
        <Button value={"/"} color={"bg-buttonOrange"} />

        <Button value={"7"} color={"bg-gray"} />
        <Button value={"8"} color={"bg-gray"} />
        <Button value={"9"} color={"bg-gray"} />
        <Button value={"*"} color={"bg-buttonOrange"} />

        <Button value={"4"} color={"bg-gray"} />
        <Button value={"5"} color={"bg-gray"} />
        <Button value={"6"} color={"bg-gray"} />
        <Button value={"-"} color={"bg-buttonOrange"} />

        <Button value={"3"} color={"bg-gray"} />
        <Button value={"2"} color={"bg-gray"} />
        <Button value={"1"} color={"bg-gray"} />
        <Button value={"÷"} color={"bg-buttonOrange"} />

        <Button value={"0"} color={"bg-gray"} />
        <Button value={"."} color={"bg-gray"} />
        <Button value={"C"} color={"bg-gray"} />
        <Button value={"="} color={"bg-equal"} />
      </div>
    </div>
  );
};

export default Display;

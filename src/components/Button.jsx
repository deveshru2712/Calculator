import React from "react";

const Button = ({ value, color, onclick }) => {
  return (
    <button
      onClick={() => {
        onclick(value);
      }}
      value={value}
      className={`active:scale-125 duration-200 flex justify-center items-center text-2xl text-black font-semibold border  border-white ${color}`}
    >
      {value}
    </button>
  );
};

export default Button;

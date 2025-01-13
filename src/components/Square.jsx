import React from "react";

const Square = (props) => {
  return (
    <div
      className="border-blue-600 border border-solid p-3 text-center cursor-pointer min-h-14 flex items-center justify-center"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Square;

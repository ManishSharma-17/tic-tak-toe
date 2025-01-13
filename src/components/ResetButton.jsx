import React from "react";

const ResetButton = ({ onclick }) => {
  return (
    <button className="border py-2 px-4" onClick={onclick}>
      Play Again
    </button>
  );
};

export default ResetButton;

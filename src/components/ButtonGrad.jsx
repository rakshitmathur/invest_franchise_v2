import React from "react";

const ButtonGrad = ({ text, wid, high }) => {
  return (
    <>
      <button
        className="button-hover-grad rounded-full px-4 py-1"
        style={{ width: wid, height: high }}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonGrad;

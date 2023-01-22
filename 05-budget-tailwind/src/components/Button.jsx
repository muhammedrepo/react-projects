import React from "react";

const Button = (bgColor) => {
  return (
    <button
      type="submit"
      className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mb-2`}
    >
      Submit
    </button>
  );
};

export default Button;

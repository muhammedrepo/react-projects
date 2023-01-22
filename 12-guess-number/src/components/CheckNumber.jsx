import React from "react";

function CheckNumber({ guess, handleChange, handleClick }) {
  return (
    <section className="left">
      <input
        type="number"
        className="guess"
        value={guess}
        onChange={handleChange}
      />
      <button className="btn check" onClick={handleClick}>
        Check!
      </button>
    </section>
  );
}

export default CheckNumber;

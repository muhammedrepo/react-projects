import React from "react";

function Header({ number, handleReset }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={handleReset}>
        Again!
      </button>
      <div className="number">{number}</div>
    </header>
  );
}

export default Header;

import React from "react";

function DisplayScore({ displayMessage, score, highscore }) {
  return (
    <section className="right">
      <p className="message">{displayMessage}</p>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highscore}</span>
      </p>
    </section>
  );
}

export default DisplayScore;

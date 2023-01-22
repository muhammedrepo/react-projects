import { useState } from "react";
import CheckNumber from "./components/CheckNumber";
import DisplayScore from "./components/DisplayScore";
import Header from "./components/Header";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function App() {
  const [number, setNumber] = useState("?");
  const [displayMessage, setDisplayMessage] = useState("Start guessing...");
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    setGuess(Number(e.target.value));
  };

  const handleClick = () => {
    if (!guess) {
      setDisplayMessage("⛔️ No number!");

      // When player wins
    } else if (guess === secretNumber) {
      setNumber(secretNumber);
      setDisplayMessage("🎉 Correct Number!");

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        setDisplayMessage(
          guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
        );
        score--;
      } else {
        displayMessage("💥 You lost the game!");
      }
    }
  };

  const handleReset = () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    setDisplayMessage("Start guessing...");
    setGuess("");
    setNumber("?");

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  };

  return (
    <div>
      <Header number={number} handleReset={handleReset} />
      <main>
        <CheckNumber
          handleChange={handleChange}
          handleClick={handleClick}
          guess={guess}
        />
        <DisplayScore
          displayMessage={displayMessage}
          score={score}
          highscore={highscore}
        />
      </main>
    </div>
  );
}

export default App;

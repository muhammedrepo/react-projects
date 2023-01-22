import { useState } from "react";
import bird from "../assets/svg/bird.svg";
import cat from "../assets/svg/cat.svg";
import cow from "../assets/svg/cow.svg";
import dog from "../assets/svg/dog.svg";
import gator from "../assets/svg/gator.svg";
import heart from "../assets/svg/heart.svg";
import horse from "../assets/svg/horse.svg";

const svgMap = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div
      class="flex flex-col items-center justify-center relative"
      onClick={handleClick}
    >
      <dt class="mb-2 text-3xl font-extrabold">{type}</dt>
      <dd class="font-light text-gray-500 dark:text-gray-400">
        <img src={svgMap[type]} alt="animals" />
        <img
          src={heart}
          alt="heart"
          style={{ width: 20 + 10 * click + "px" }}
          className="absolute bottom-[10%] right-[10%]"
        />
      </dd>
    </div>
  );
};
export default AnimalShow;

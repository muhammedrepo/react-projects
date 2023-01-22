import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="relative">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20">
          <div class="flex flex-col items-center pb-10">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={image}
              alt={name}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
            <span className="text-sm text-gray-500">{job}</span>

            <p className="mb-3 font-light text-center text-gray-500 max-w-md">
              {text}
            </p>
          </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-800"
          onClick={prevPerson}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-white"
          onClick={randomPerson}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-800/50 hover:bg-white"
          onClick={nextPerson}
        ></button>
      </div>
      {/* Slider controls  */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevPerson}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <FaChevronLeft />

          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextPerson}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <FaChevronRight />

          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Review;

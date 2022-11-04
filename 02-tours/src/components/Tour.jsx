import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div
      key={id}
      className="mt-12 flex flex-col items-center bg-white rounded-lg border shadow-md max-w-sm md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-auto rounded-t-lg md:min-h-min md:max-w-2xl md:rounded-none md:rounded-l-lg"
        src={image}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-white">{price}</span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-gray-300 hover:text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 text-center mt-2 mb-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          className="inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;

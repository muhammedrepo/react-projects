import React from "react";

const List = ({ persons }) => {
  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 capitalize">
          {persons.length} birthday today
        </h5>
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200">
          {persons.map((person) => {
            const { id, name, age, image, email } = person;

            return (
              <li key={id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={image}
                      alt={name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {name}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">{email}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {age} years old
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

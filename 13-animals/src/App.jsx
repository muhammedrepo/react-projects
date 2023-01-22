import { useState } from "react";
import AnimalShow from "./components/AnimalShow";
import Button from "./components/Button";

function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
    setShowBox(true);
  };
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center my-10">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Click to display animals
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Increase heart size by clicking on each animal
        </p>

        <Button handleClick={handleClick} />
      </div>
      {showBox && (
        <div class="border-t border-green-200 dark:border-green-600">
          <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-green-800">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-green-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              {renderAnimals}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

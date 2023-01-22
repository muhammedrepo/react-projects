import { useState } from "react";
import searchImage from "./Api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImage(term);

    setImages(result);
  };

  return (
    <div className="container mx-auto p-16">
      <div className="my-8">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Image search app <span className="text-blue-600">the world's #1</span>
          .
        </h1>
        <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Coolzyte we focus on markets where technology, innovation.
        </p>
      </div>

      <div className="max-w-screen-sm mx-auto">
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className="max-w-screen-lg mx-auto">
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;

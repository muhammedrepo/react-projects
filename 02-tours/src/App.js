import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center mt-20">
        <div className="flex flex-col">
          <h2 className="text-4xl font-extrabold text-gray-900 capitalize mb-5">
            no tours left
          </h2>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={fetchTour}
          >
            refresh
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl capitalize">
        Our latest tours
      </h1>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;

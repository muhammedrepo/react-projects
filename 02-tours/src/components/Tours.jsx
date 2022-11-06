import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      {tours.map((tour) => {
        return (
          <div className="">
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          </div>
        );
      })}
    </div>
  );
};

export default Tours;

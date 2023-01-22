import ShowImage from "./ShowImage";

const ImageList = ({ images }) => {
  const renderImages = images.map((image) => (
    <ShowImage key={image.id} image={image} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
      {renderImages}
    </div>
  );
};
export default ImageList;

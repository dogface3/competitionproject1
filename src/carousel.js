import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setIndex] = useState(0);

  const handleClick = (increment) => {
    setIndex((prevIndex) => (prevIndex + increment + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={() => handleClick(-1)}>Previous</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={() => handleClick(1)}>Next</button>
    </div>
  );
};

export default Carousel;

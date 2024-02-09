import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div style = {{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button onClick={handlePrev}>Left</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={handleNext}>Right</button>
    </div>
  );
};

export default Carousel;

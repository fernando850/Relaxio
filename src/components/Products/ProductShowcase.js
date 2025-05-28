import '../../styles/Products.css';
import { useState } from 'react';

const images = [
  '/Images/massager-front-view.png',
  '/Images/massager-side-view.png',
  '/Images/massager-use-view.png',
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="product-showcase">
      <h2 className="product-title">Best Neck Massager on the Market</h2>
      

      <div className="image-wrapper">
        <button className="product-arrow" onClick={handlePrev}>&lt;</button>
        <img src={images[currentIndex]} alt="Product View" className="product-image" />
        <button className="product-arrow" onClick={handleNext}>&gt;</button>
      </div>

      <button>Buy Now</button>
    </section>
  );
};

export default ProductShowcase;

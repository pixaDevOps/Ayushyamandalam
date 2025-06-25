import React from 'react';
import image from '../../assets/images/carousel/image.png';
import image1 from '../../assets/images/carousel/image2.png';
import useImageCarousel from '../../hooks/useImageCarousel';

const ImageCarousel = () => {
  const images = [
    { id: 1, image },
    { id: 2, image: image1 },
    { id: 3, image },
  ];

  const { currentIndex, setCurrentIndex } = useImageCarousel(images);

  return (
    <div
      className="relative border border-gray-300 rounded-[20px] overflow-hidden"
      style={{ width: '560px', height: '600px' }}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 440}px)`,
          width: `${images.length * 440}px`,
        }}
      >
        {images.map((img) => (
          <div key={img.id} style={{ width: '600px', height: '600px' }}>
            <div className="w-full h-full rounded-[20px] overflow-hidden shadow-xl">
              <img
                src={img.image}
                alt={`Slide ${img.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-4 flex space-x-2 bg-white/90 px-3 py-1 rounded-full shadow">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-1 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

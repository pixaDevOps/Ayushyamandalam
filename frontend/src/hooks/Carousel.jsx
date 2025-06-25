import React, { useState, useEffect } from 'react';
import image from '../assets/images/carousel/c2.png';
import image2 from '../assets/images/carousel/c1.png';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const bookImages = [
    {
      id: 1,
      title: "DRUGLESS",
      subtitle: "KLINGTON",
      author: "RICHARD W. ROUGE OF THE CHALYTIME RESIDENT",
      image: image
    },
    {
      id: 2,
      title: "AYURVEDA",
      subtitle: "MANDALAM",
      author: "NELSON & COMPLICITY",
      image: image2
    },
    {
      id: 3,
      title: "DRUGLESS",
      subtitle: "KLINGTON",
      author: "RICHARD W. ROUGE OF THE CHALYTIME RESIDENT",
      image: image // Repeating first image for 3rd item
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bookImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bookImages.length]);

  return (
    <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-orange-50 to-amber-50 relative">
      <div className="relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Success Story
        </h2>
        <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed">
          "By Publishing my book, my impact has expanded exponentially, touching hearts and opening minds to the power of alternative healing."
        </blockquote>

        <div className="relative w-64 h-80 mx-auto">
          {bookImages.map((book, index) => (
            <div
              key={book.id}
              className={`absolute inset-0 transition-all duration-500 transform ${
                index === currentImage
                  ? 'opacity-100 scale-100 z-20'
                  : index === (currentImage + 1) % bookImages.length
                  ? 'opacity-60 scale-95 translate-x-4 z-10'
                  : 'opacity-30 scale-90 translate-x-8 z-0'
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="relative h-full">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-2/3 object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{book.title}</h3>
                    <p className="text-green-200 text-sm">{book.subtitle}</p>
                    <p className="text-green-100 text-xs mt-1">{book.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bookImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
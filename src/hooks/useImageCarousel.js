import { useEffect, useState } from 'react';

export default function useImageCarousel(images, interval = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return { currentIndex, setCurrentIndex };
}

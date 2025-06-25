import React, { useState, useEffect } from 'react';

const AdminLogin = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Sample book images for the carousel
  const bookImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center"
    },
    {
      id: 3,

      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center"
    }
  ];

  // Auto-rotate carousel every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bookImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [bookImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-amber-50 p-8">
      {/* Decorative leaf patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-600">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 opacity-15">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-500">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 opacity-10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-700">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Success Story with Carousel */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-orange-50 to-amber-50 relative">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  Success Story
                </h2>
                

                {/* Carousel Container */}
                <div className="relative w-64 h-80 mx-auto">
                  {/* Book Images */}
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
                          </div>
                          {/* Meditation figure overlay */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 bg-amber-400 rounded-full opacity-80 flex items-center justify-center">
                              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Carousel Indicators */}
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

            {/* Right side - Login Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                {/* Profile Icon */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Ayushya Mandalam</p>
                </div>

                {/* Login Form */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Login</h3>
                    <p className="text-gray-600 text-sm">
                      Hello, Enter your details to get login to your account
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter your Phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105">
                      Send OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
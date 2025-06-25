import React, { useState } from 'react';

const LoginSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    console.log('Sending OTP to:', phoneNumber);
    // Add your OTP logic here
  };

  return (
    <div className="flex-1 bg-white p-8 lg:p-12 flex flex-col justify-center">
      <div className="max-w-sm mx-auto w-full">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            {/* Triangular Logo Background */}
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 transform rotate-0" 
                   style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
              </div>
              {/* Meditation Figure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Ayushya Mandalam
          </h2>
          <p className="text-sm text-gray-600 italic mb-8">
            Nature is Everything
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Login
          </h3>
          
          <p className="text-gray-600 text-center text-sm">
            Hello, Enter your details to get login to your account
          </p>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="tel"
                placeholder="Enter your Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              onClick={handleSendOTP}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
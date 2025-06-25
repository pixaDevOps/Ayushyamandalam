import React, { useState } from 'react';
import bg from '../../assets/images/LoginBackground.png';
import Logo from '../../assets/icons/logo.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import ImageCarousel from '../../components/commmon/ImageCarousel';

const AdminLogin = () => {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden w-full max-h-[800px]">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Carousel */}
            <div className="lg:w-1/2 p-2 bg-white rounded-l-3xl flex items-center justify-center">
              <ImageCarousel />
            </div>

            {/* Right - Login Form */}
            <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center bg-white">
              <div className="max-w-md mx-auto w-full text-center">
                <img src={Logo} alt="Logo" className="w-[150px] h-[220px] mx-auto object-contain mb-6" />

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {step === 'phone' ? 'Login' : 'OTP Verification'}
                </h3>
            <p className="text-gray-600 text-sm">
  {step === 'phone' ? (
    <>
      Hello, enter your details 
      to login <br /> to your account
    </>
  ) : (
    <>
      Enter the OTP sent to <br />
      <strong>+91 {phone}</strong>
    </>
  )}
</p>


                {step === 'phone' ? (
                  <>
                    <div className="relative w-3/4 mx-auto mb-4">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                        <PhoneIcon fontSize="small" />
                      </div>
                    </div>
                    <button
                      className="w-3/4 mx-auto block bg-blue-700 text-white font-semibold py-3 px-4 rounded hover:scale-105 transition-transform"
                      onClick={() => setStep('otp')}
                    >
                      Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center gap-3 mb-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (!/^\d*$/.test(val)) return;
                            const newOtp = [...otp];
                            newOtp[index] = val;
                            setOtp(newOtp);
                            if (val && index < 3) {
                              document.getElementById(`otp-${index + 1}`)?.focus();
                            }
                          }}
                          className="w-12 h-12 text-xl text-center border border-gray-300 rounded"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Didn’t receive OTP?{' '}
                      <span className="text-blue-600 font-semibold">29s ⏱</span>
                    </div>
                    <button
                      className="w-3/4 mx-auto block bg-blue-700 text-white font-semibold py-3 px-4 rounded hover:scale-105 transition-transform"
                      onClick={() => alert('OTP Verified')}
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

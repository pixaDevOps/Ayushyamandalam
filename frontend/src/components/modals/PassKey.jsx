import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import ManSvg from '../../assets/images/Man.png';
import LockIcon from '../../assets/icons/PassKey.svg';

const CORRECT_PASSKEY = '1234';

const PasskeyModal = ({ onClose, onSuccess }) => {
  const [passkey, setPasskey] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newPasskey = [...passkey];
      newPasskey[index] = value;
      setPasskey(newPasskey);
      if (value && index < 3) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !passkey[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (passkey.join('') === CORRECT_PASSKEY) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl flex w-[700px] h-[400px] overflow-hidden relative">

        {/* Left Image */}
        <img src={ManSvg} alt="Businessman" className="w-1/2 h-full object-cover" />

        {/* Right Side */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center text-center relative">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          {/* Lock Icon */}
          <img src={LockIcon} alt="Lock" className="w-10 h-10 mb-3" />

          <h2 className="text-2xl font-bold mb-1">Passkey</h2>
          <p className="text-sm text-gray-500 mb-6">Please Enter Your Passkey</p>

          {/* Input Fields */}
          <div className="flex gap-3 mb-4">
            {passkey.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                type="password"
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg shadow-sm"
              />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-xs text-red-500 mb-2">Incorrect Passkey</p>}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-2.5 rounded-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasskeyModal;

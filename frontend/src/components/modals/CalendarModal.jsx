import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import format from 'date-fns/format';
import { X } from 'lucide-react';

import DefaultIcon from '../../assets/icons/Calendar.svg'; 

const CalendarModal = ({ onClose }) => {
  const [selected, setSelected] = useState('today');
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleOptionClick = (option) => {
    setSelected(option);
    const today = new Date();

    switch (option) {
      case 'today':
        setRange([{ startDate: today, endDate: today, key: 'selection' }]);
        break;
      case 'last7':
        setRange([{ startDate: new Date(today.setDate(today.getDate() - 6)), endDate: new Date(), key: 'selection' }]);
        break;
      case 'last15':
        setRange([{ startDate: new Date(today.setDate(today.getDate() - 14)), endDate: new Date(), key: 'selection' }]);
        break;
      case 'last30':
        setRange([{ startDate: new Date(today.setDate(today.getDate() - 30)), endDate: new Date(), key: 'selection' }]);
        break;
      case 'custom':
      default:
        break;
    }
  };

  return (
    <div className="fixed top-20 right-6 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4 w-[350px]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Calendar</h3>
        <button onClick={onClose}><X className="w-5 h-5" /></button>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { key: 'today', label: 'Today' },
          { key: 'last7', label: 'Last 7days' },
          { key: 'last15', label: 'Last 15days' },
          { key: 'last30', label: 'Last 1 Month' },
          { key: 'custom', label: 'Custom' }
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`px-3 py-1 rounded-full text-sm ${selected === key ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
            onClick={() => handleOptionClick(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Default calendar image for all except custom */}
      {selected !== 'custom' && (
        <div className="flex flex-col items-center justify-center">
          <img src={DefaultIcon} alt="Calendar" className="w-40 h-40 object-contain mb-2" />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {selected === 'today'
              ? "Today's Data"
              : selected === 'last7'
              ? 'Last 7 Days Data'
              : selected === 'last15'
              ? 'Last 15 Days Data'
              : 'Last 1 Month Data'}
          </p>
        </div>
      )}

      {/* Date Picker only when 'custom' is selected */}
      {selected === 'custom' && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          className="mb-4"
        />
      )}

      {/* Display summary */}
      {selected === 'custom' && (
        <div className="text-center my-3 text-sm text-gray-600 dark:text-gray-300">
          <p>
            From: {format(range[0].startDate, 'dd MMM yyyy')} <br />
            To: {format(range[0].endDate, 'dd MMM yyyy')}
          </p>
        </div>
      )}

      <button
        onClick={onClose}
        className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-md mt-4"
      >
        Apply
      </button>
    </div>
  );
};

export default CalendarModal;

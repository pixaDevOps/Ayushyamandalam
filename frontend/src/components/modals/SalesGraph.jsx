import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { X } from 'lucide-react';

// Static data inside component
const chartData = [
  { name: 'Crystals', value: 25, color: '#3B82F6', fadedColor: '#BFDBFE' },
  { name: 'Personal Care', value: 15, color: '#F59E0B', fadedColor: '#FDE68A' },
  { name: 'Food Products', value: 8, color: '#EF4444', fadedColor: '#FCA5A5' },
  { name: 'Books', value: 52, color: '#10B981', fadedColor: '#6EE7B7' },
];

const SalesSummaryModal = ({ onClose }) => {
  const maxValue = Math.max(...chartData.map(item => item.value));

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-[90%] max-w-lg p-6 relative border border-gray-200 dark:border-gray-700">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Sales Summary</h2>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => {
                const isMax = entry.value === maxValue;
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={isMax ? entry.color : entry.fadedColor}
                    stroke="none"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Labels */}
        <div className="mt-4 space-y-2 text-sm">
          {chartData.map((item, index) => {
            const isMax = item.value === maxValue;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={`${isMax ? 'font-bold text-black dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                    {item.name}
                  </span>
                </div>
                <span className={`${isMax ? 'font-bold text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {item.value}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesSummaryModal;

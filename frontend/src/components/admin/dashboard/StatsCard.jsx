import React from 'react';
import { TrendingUp, TrendingDown, EyeOff } from 'lucide-react';

const StatsCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  customIcon,
  color,
  extraIcon,
  onExtraIconClick,
  isOpen
}) => {
  const [borderColor, bgColor] = color.split(' ');

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700 ${borderColor} border-l-4 
      h-full min-h-[140px] flex flex-col justify-between transition-all duration-300 hover:shadow-md`}
    >
      {/* Header Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2 truncate">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
              {value}
            </p>
            {extraIcon && (
              <EyeOff
                size={18}
                className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex-shrink-0"
                onClick={onExtraIconClick}
              />
            )}
          </div>
        </div>

        {/* Right Side Icon */}
        <div className={`flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 ${bgColor} flex-shrink-0 ml-3`}>
          {customIcon ? (
            <img
              src={customIcon}
              alt={`${title} icon`}
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter dark:invert"
            />
          ) : Icon ? (
            <Icon size={20} className="text-gray-700 dark:text-gray-300" />
          ) : null}
        </div>
      </div>

      {/* Change Indicator */}
      <div className="flex items-center gap-1 mt-auto">
        {changeType === 'up' ? (
          <TrendingUp size={14} className="text-green-500 flex-shrink-0" />
        ) : (
          <TrendingDown size={14} className="text-red-500 flex-shrink-0" />
        )}
        <span className={`text-sm font-medium ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 ml-1">
          from yesterday
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
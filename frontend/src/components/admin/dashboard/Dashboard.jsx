import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import StatsCard from './StatsCard';
import SalesChart from './SalesChart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PasskeyModal from '../../modals/PassKey';
import CalendarModal from '../../modals/CalendarModal';
import SalesSummaryModal from '../../modals/SalesGraph';

import TotalUserIcon from '../../../assets/icons/User.svg';
import TotalOrderIcon from '../../../assets/icons/Orders.svg';
import TotalSalesIcon from '../../../assets/icons/Sales.svg';
import TotalTaxIcon from '../../../assets/icons/Tax.svg';
import NotificationIcon from '../../../assets/icons/notification.svg';
import DarkModeIcon from '../../../assets/icons/Modes.svg';

const DashboardContent = () => {
  const { isOpen, isDarkMode, toggleDarkMode } = useSidebar();
  const [notificationCount] = useState(3);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPasskeyModal, setShowPasskeyModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handlePasskeySuccess = () => {
    setShowPasskeyModal(false);
    setShowCalendarModal(true);
  };

  const handleCalendarApply = (range) => {
    console.log("Selected Range:", range);
    setSelectedDateRange(range);
    setShowCalendarModal(false);
    setShowSalesModal(true);
  };

  const salesData = [
    { time: '11', value: 800 },
    { time: '12', value: 1200 },
    { time: '13', value: 900 },
    { time: '14', value: 1500 },
    { time: '15', value: 2000 },
    { time: '16', value: 1800 },
    { time: '17', value: 2200 },
    { time: '18', value: 2800 },
    { time: '2am', value: 2400 },
    { time: '4am', value: 3200 },
    { time: '6am', value: 2800 },
    { time: '8am', value: 3000 }
  ];

  const pieData = [
    { name: 'Crystals', value: 25, color: '#1E3A8A', fadedColor: '#1E40AF' },
    { name: 'Personal Care', value: 15, color: '#B45309', fadedColor: '#D97706' },
    { name: 'Food Products', value: 8, color: '#B91C1C', fadedColor: '#DC2626' },
    { name: 'Books', value: 52, color: '#047857', fadedColor: '#059669' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'} bg-gray-50 dark:bg-gray-900 text-black dark:text-white`}>
      {/* Main Content Container with proper padding */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-700 font-bold text-gray-900 dark:text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <div 
              onClick={toggleDarkMode} 
              className="w-[51px] h-[24px] flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 cursor-pointer transition-colors duration-300"
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                <img src={DarkModeIcon} alt="Dark Mode" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* Notification Icon */}
            <div className="relative">
              <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-[4px] bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {notificationCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Total Users" 
              value="40,689" 
              change="8.5% Up" 
              changeType="up" 
              customIcon={TotalUserIcon} 
              color="border-blue-500 bg-blue-100" 
              isOpen={isOpen} 
            />
            <StatsCard 
              title="Total Orders" 
              value="10,293" 
              change="1.3% Up" 
              changeType="up" 
              customIcon={TotalOrderIcon} 
              color="border-yellow-500 bg-yellow-100" 
              isOpen={isOpen} 
            />
            <StatsCard
              title="Total Sales"
              value="₹ *****"
              change="4.3% Down"
              changeType="down"
              customIcon={TotalSalesIcon}
              color="border-green-500 bg-green-100"
              isOpen={isOpen}
              extraIcon={true}
              onExtraIconClick={() => setShowPasskeyModal(true)}
            />
            <StatsCard 
              title="Total Tax" 
              value="₹2,040" 
              change="1.8% Up" 
              changeType="up" 
              customIcon={TotalTaxIcon} 
              color="border-red-500 bg-red-100" 
              isOpen={isOpen} 
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            
            {/* Pie Chart - Product Sold */}
            <div className="xl:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Sold</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">This Week</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* Pie Chart */}
                <div className="w-[407px] h-[220px] p-[14px] gap-[10px] bg-white dark:bg-gray-800">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        dataKey="value"
      >
        {pieData.map((entry, index) => {
          const maxValue = Math.max(...pieData.map(d => d.value));
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
</div>


                    {/* Legend */}
                    <div className="w-1/2 space-y-4 pl-4">
                      {pieData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {String(item.value).padStart(2, '0')}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart - Sales Performance */}
            <div className="xl:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Performance</h3>
                    <div className="relative">
                      <Calendar 
                        size={20} 
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors" 
                        onClick={() => setShowCalendar(!showCalendar)} 
                      />
                      {showCalendar && (
                        <div className="absolute right-0 top-8 z-50">
                          <CalendarModal onClose={() => setShowCalendar(false)} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="h-[200px]">
                    <SalesChart data={salesData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          
          {/* Top Selling Products Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Selling Products</h3>
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors duration-200">
                  View All
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Product Name</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Sale</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((_, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="py-4 px-2 font-medium text-gray-900 dark:text-white">Product Full Name</td>
                        <td className="py-4 px-2 font-medium text-gray-900 dark:text-white">₹ 5,55,000.00</td>
                        <td className="py-4 px-2 font-medium text-gray-900 dark:text-white">40</td>
                        <td className="py-4 px-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            In Stock
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                            <span>#1</span>
                            <span>📈</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Most Recent Orders Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Most Recent Orders</h3>
                <button className="text-sm font-medium px-4 py-2 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white transition-colors duration-200">
                  View All
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Total</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '#000001', name: 'Customer Full Name', price: '₹ 3000', total: '05', date: 'Jun 12' },
                      { id: '#000002', name: 'Customer Full Name', price: '₹ 5000', total: '08', date: 'Jun 13' },
                      { id: '#000003', name: 'Customer Full Name', price: '₹ 6000', total: '01', date: 'Jun 14' }
                    ].map((order, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="py-4 px-2 font-medium text-gray-900 dark:text-white">{order.id}</td>
                        <td className="py-4 px-2 text-gray-600 dark:text-gray-300">{order.name}</td>
                        <td className="py-4 px-2 font-medium text-gray-900 dark:text-white">{order.price}</td>
                        <td className="py-4 px-2 text-gray-600 dark:text-gray-300">{order.total}</td>
                        <td className="py-4 px-2 text-gray-600 dark:text-gray-300">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showPasskeyModal && (
        <PasskeyModal
          onClose={() => setShowPasskeyModal(false)}
          onSuccess={handlePasskeySuccess}
        />
      )}

      {showCalendarModal && (
        <CalendarModal
          onClose={() => setShowCalendarModal(false)}
          onApply={handleCalendarApply}
        />
      )}

      {showSalesModal && (
        <SalesSummaryModal
          onClose={() => setShowSalesModal(false)}
          dateRange={selectedDateRange}
        />
      )}
    </div>
  );
};

export default DashboardContent;
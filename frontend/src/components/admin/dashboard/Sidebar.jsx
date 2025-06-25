import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSidebar } from './SidebarContext';

import logoname from '../../../assets/icons/logo.svg';
import brandname from '../../../assets/icons/BrandName.svg';

import DashboardIcon from '../../../assets/icons/Dashboard.svg';
import ProductIcon from '../../../assets/icons/Products.svg';
import OrderIcon from '../../../assets/icons/Orders.svg';
import CustomerIcon from '../../../assets/icons/Customer.svg';
import ChatIcon from '../../../assets/icons/Chat.svg';
import ReportIcon from '../../../assets/icons/Report.svg';

// Sidebar menu configuration
const menuItems = [
  { icon: DashboardIcon, label: 'Dashboard', active: true },
  {
    icon: ProductIcon,
    label: 'Products',
    children: [
      { label: 'Add Category', enabled: true },
      { label: 'Add Product', enabled: false },
    ],
  },
  { icon: OrderIcon, label: 'Order Lists' },
  { icon: CustomerIcon, label: 'Customer' },
  { icon: ChatIcon, label: 'Chat' },
  { icon: ReportIcon, label: 'Report' },
];

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const MenuItem = ({ item }) => {
    const isActive = item.active || openSubMenu === item.label;

    return (
      <div>
        <div
          className={`flex items-center gap-3 px-3 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-200 group
            ${isActive ? 'bg-[#0000FFBB] text-white shadow-lg' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}
            ${isOpen ? 'justify-start' : 'justify-center'}`}
          onClick={() => item.children && toggleSubMenu(item.label)}
        >
          <img
            src={item.icon}
            alt={item.label}
            className={`w-6 h-6 ${isActive ? 'filter brightness-0 invert' : 'opacity-70 group-hover:opacity-100'}`}
          />
          {isOpen && (
            <span className={`text-sm font-medium ${isActive ? 'text-white' : ''}`}>
              {item.label}
            </span>
          )}
        </div>

        {item.children && openSubMenu === item.label && isOpen && (
          <SubMenu items={item.children} />
        )}
      </div>
    );
  };

  const SubMenu = ({ items }) => (
    <div className="ml-8 mt-1 mb-2">
      {items.map((child, idx) => (
        <div key={idx} className="flex items-center py-2 px-4 relative">
          <div className="absolute left-0 w-3 h-px bg-gray-300 dark:bg-gray-600"></div>
          {idx === 0 && (
            <div className="absolute left-0 top-0 w-px h-full bg-gray-300 dark:bg-gray-600"></div>
          )}
          <span
            className={`text-sm transition-colors duration-200 ml-4 ${
              child.enabled
                ? 'text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-800 dark:hover:text-blue-300'
                : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            {child.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-all duration-300 flex flex-col ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-gray-200 dark:border-gray-700">
        <img src={logoname} alt="Logo" className="w-10 h-10 object-contain mr-2" />
        {isOpen && (
          <img src={brandname} alt="Brand Name" className="w-28 object-contain" />
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </div>

      {/* Toggle Sidebar Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          {isOpen ? (
            <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 
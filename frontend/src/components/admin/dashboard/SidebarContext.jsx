import React, { createContext, useContext, useState } from 'react';
import { Home, Package, ShoppingCart, Users, MessageCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// Sidebar Context
const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
};
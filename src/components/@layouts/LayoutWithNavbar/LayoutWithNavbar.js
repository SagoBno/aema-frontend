import React from 'react';
import MainLayout from '../MainLayout';
import Navbar from './Navbar';

function LayoutWithNavbar({ children }) {
  return (
    <MainLayout>
      <Navbar />
      <div className="c_main_with_nav">
        {children}
      </div>
    </MainLayout>
  );
}

export default LayoutWithNavbar;

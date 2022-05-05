import React from 'react';
import MainLayout from '../MainLayout';
import Navbar from './Navbar';

function LayoutWithNavbar({ children }) {
  return (
    <MainLayout>
      <div className=" bg-general-bg grid grid-cols-mainLayout relative">
        <Navbar />
        {children}
      </div>
    </MainLayout>
  );
}

export default LayoutWithNavbar;

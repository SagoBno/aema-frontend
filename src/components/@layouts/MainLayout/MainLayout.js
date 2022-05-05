import React from 'react';
import Header from './Header';

function MainLayout({ children }) {
  return (
    <div className="max-w-screen min-h-screen grid grid-rows-mainLayout">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;

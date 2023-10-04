import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;

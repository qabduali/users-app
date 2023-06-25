import React from 'react';
import { Outlet } from 'react-router-dom';
import DesktopLayout from '../DesktopLayout';
import MobileLayout from '../MobileLayout';
import { useMobileDetection } from '../../hooks/useMobileDetection';

const Layout = () => {
  const isMobile = useMobileDetection();

  return isMobile ? (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  ) : (
    <DesktopLayout>
      <Outlet />
    </DesktopLayout>
  );
};

export default Layout;

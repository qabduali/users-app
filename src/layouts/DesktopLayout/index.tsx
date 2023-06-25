import React from 'react';
import DesktopSidebar from '../DesktopSidebar';
import './styles.scss';

type Props = {
  children: React.ReactElement;
};

const DesktopLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="desktopLayout__wrapper">
      <DesktopSidebar />
      <main className="desktopLayout">{children}</main>
    </div>
  );
};

export default DesktopLayout;

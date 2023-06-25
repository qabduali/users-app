import React from 'react';

type Props = {
  children: React.ReactElement;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mobileLayout__wrapper">
      <main className="mobileLayout">{children}</main>
    </div>
  );
};

export default MobileLayout;

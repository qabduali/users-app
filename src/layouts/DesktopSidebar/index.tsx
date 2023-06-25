import React from 'react';
import { SidebarButton } from '../../components';
import { sidebarLinks } from '../../consts/consts';
import logo from '../../assets/icons/logo.svg';
import userPicture from '../../assets/pictures/user.svg';
import './styles.scss';

const DesktopSidebar = () => {
  return (
    <aside className="desktopSidebar__wrapper">
      <img src={logo} alt="" />
      <img src={userPicture} alt="" />
      {sidebarLinks.map((link, index) => (
        <SidebarButton
          key={`${link.label}--${index}`}
          path={link.path}
          logo={link.logo}
          label={link.label}
        />
      ))}
    </aside>
  );
};

export default DesktopSidebar;

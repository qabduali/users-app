import React from 'react';
import ReactDOM from 'react-dom';
import { SidebarButton } from '../../components';
import { sidebarLinks } from '../../consts/consts';
import burgerMenuIcon from '../../assets/icons/burger-menu-icon.svg';
import userPicture from '../../assets/pictures/user.svg';
import './styles.scss';

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

const MobileSidebar: React.FC<Props> = ({ open, toggleOpen }) => {
  const sidebarContent = (
    <aside className={`mobileSidebar__wrapper ${open ? 'show' : ''}`}>
      <img src={burgerMenuIcon} alt="menu" onClick={toggleOpen} />
      <img src={userPicture} alt="" />
      {sidebarLinks.map((link, index) => (
        <SidebarButton
          key={`${link.label}--${index}`}
          path={link.path}
          logo={link.logo}
          label={link.label}
          variant="mobile"
        />
      ))}
    </aside>
  );
  return open
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ReactDOM.createPortal(sidebarContent, document.querySelector('.mobileLayout__wrapper')!)
    : sidebarContent;
};

export default MobileSidebar;

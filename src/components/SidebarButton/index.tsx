import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

type Props = {
  path: string;
  logo: string;
  label: string;
  variant?: string; // desktop || mobile
};

const SidebarButton: React.FC<Props> = ({ path, logo, label, variant = 'desktop' }) => {
  return (
    <NavLink className={`sidebarButton__wrapper`} to={path}>
      <div className="sidebarButton">
        <img
          className={`sidebarButton__icon${variant === 'mobile' && '--mobile'}`}
          src={logo}
          alt={label}
        />
        {variant === 'mobile' && <p className="sidebarButton__label">{label}</p>}
      </div>
    </NavLink>
  );
};

export default SidebarButton;

import React from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import './styles.scss';

type Props = {
  variant: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
};

const Button: React.FC<Props> = ({ variant, disabled, children, onClick, id }) => {
  const isMobile = useMobileDetection();

  return (
    <button
      className={`button button--${variant}${isMobile ? '--mobile' : ''}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import './styles.scss';

interface IProps {
  children?: React.ReactNode;
  handleClick: () => void;
}

const Backdrop: React.FC<IProps> = ({ handleClick, children }) => {
  return (
    <>
      <div className={'backdrop'} onClick={handleClick}>
        {children}
      </div>
    </>
  );
};

export default Backdrop;

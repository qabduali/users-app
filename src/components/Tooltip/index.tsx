import React, { useEffect } from 'react';
import { Portal, Backdrop } from '../index';
import './styles.scss';

type PropsType = {
  open: boolean;
  handleClose: () => void;
  targetId: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<PropsType> = ({ open, handleClose, targetId, children }) => {
  const container = document.getElementsByClassName('tooltip')[0] as HTMLElement;

  useEffect(() => {
    const container = document.getElementsByClassName('tooltip')[0] as HTMLElement;
    const targetElement = document.getElementById(targetId) as HTMLElement;
    container.style.position = 'absolute';
    container.style.top = `${targetElement.getBoundingClientRect().top}px`;
    container.style.right = `${
      window.innerWidth - targetElement.getBoundingClientRect().left + 170
    }px`;
    container.style.opacity = '0';
  }, []);

  useEffect(() => {
    const container = document.getElementsByClassName('tooltip')[0] as HTMLElement;
    const targetElement = document.getElementById(targetId) as HTMLElement;
    const containerClient = container?.getBoundingClientRect();
    if (containerClient.height + containerClient.top + 50 > window.innerHeight) {
      const newTop = targetElement.getBoundingClientRect().top - containerClient.height;
      container.style.top = `${newTop}px`;
    } else {
      container.style.top = `${targetElement.getBoundingClientRect().top}px`;
    }
    container.style.opacity = '1';
  }, [container?.getBoundingClientRect().height]);

  return open ? (
    <Portal className={'tooltip'}>
      <Backdrop handleClick={handleClose}></Backdrop>
      {children}
    </Portal>
  ) : (
    <></>
  );
};

export default Tooltip;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

type Props = {
  handleClose: () => void;
  children: React.ReactElement;
};

const Modal: React.FC<Props> = ({ handleClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={'modalWindow__darkBG'} onClick={handleClose}></div>
      <div className={'modalWindow__centered'}>
        <div className={'modalWindow'}>
          <div className={'modalWindow__body'}>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;

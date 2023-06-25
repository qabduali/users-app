import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

type Props = InputHTMLAttributes<any>;

const Input: React.FC<Props> = ({ ...rest }) => {
  return (
    <div className="input__wrapper">
      <input {...rest} />
    </div>
  );
};

export default Input;

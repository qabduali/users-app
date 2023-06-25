import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

type Props = InputHTMLAttributes<any>;

const Search: React.FC<Props> = ({ ...rest }) => {
  return (
    <div className={`search__wrapper`}>
      <input type="search" {...rest} />
    </div>
  );
};

export default Search;

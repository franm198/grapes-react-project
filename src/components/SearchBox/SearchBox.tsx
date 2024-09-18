import React, { ChangeEvent } from 'react';
import './SearchBox.scss';

type SearchBoxProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ label, placeholder, value, onChange }) => {
  const capitalizedLabel = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;

  return (
    <div className="search-box">
      <label htmlFor={label} className="search-box__label">
        {capitalizedLabel}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-box__input"
      />
    </div>
  );
};

export default SearchBox;
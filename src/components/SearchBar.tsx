import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search users..."
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ padding: '0.5em', width: '100%', maxWidth: 320, margin: '1em 0' }}
    aria-label="Search users"
  />
);

export default SearchBar;

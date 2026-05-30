import React from 'react';

const SearchBar = React.forwardRef(({ searchTerm, onSearch }, ref) => {
  return (
    <div className="searchbar-wrapper" style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 1rem 1rem',
      backgroundColor: '#fdf6e3'
    }}>
      <input
        ref={ref}
        className="site-search-input"
        type="text"
        placeholder="Search by name, username, or email..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
          border: '2px solid #4b2e2e',
          borderRadius: '8px',
          outline: 'none',
          backgroundColor: '#fff',
          color: '#4b2e2e'
        }}
      />
    </div>
  );
});

export default React.memo(SearchBar)
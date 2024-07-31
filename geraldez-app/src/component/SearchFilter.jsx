import React from "react";

const SearchFilter = ({ searchQuery, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;

import React, { useState } from 'react';

const SearchBar = ({ onTripFilter }) => {
  return (
    <>
      <h1>
        Weather <b>Forecast</b>
      </h1>
      <input
        type="text"
        placeholder="Search your trip"
        onChange={onTripFilter}
      ></input>
    </>
  );
};

export default SearchBar;

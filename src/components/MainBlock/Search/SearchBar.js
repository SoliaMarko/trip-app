import React, { useState } from 'react';
import SearchIcon from '../../../assets/icons/search-icon.png';

const SearchBar = ({ onTripFilter }) => {
  return (
    <>
      <h1>
        Weather <b>Forecast</b>
      </h1>
      <div className="search-input">
        <img src={SearchIcon} alt="" className="search-icon" />
        <input
          type="text"
          placeholder="Search your trip"
          onChange={onTripFilter}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;

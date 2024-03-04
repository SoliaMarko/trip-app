import './SearchBar.css';
import React, { useContext } from 'react';
import SearchIcon from '../../assets/icons/search-icon.png';
import { TripContext } from '../../App';

const SearchBar = () => {
  const { onTripFilter } = useContext(TripContext);

  return (
    <>
      <h1>
        Weather <b>Forecast</b>
      </h1>
      <div className="search-input-wrapper">
        <img src={SearchIcon} alt="" className="search-icon" />
        <input
          type="text"
          placeholder="Search your trip"
          className="search-input"
          onChange={onTripFilter}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;

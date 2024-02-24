import React, { useState } from 'react';

const TripItem = ({ onSelectTrip, id, city, startDate, endDate }) => {
  function switchTrip() {
    onSelectTrip(id);
  }

  return (
    <li>
      <div className="trip-item" onClick={switchTrip}>
        <img
          src={require(`../../../assets/citiesImages/${city
            .split(' ')
            .join('')}.webp`)}
          alt={`${city}-illustration`}
        />
        <div className="trip-info">
          <h4 className="trip-city">{city}</h4>
          <p className="trip-dates">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TripItem;

import React, { useState } from 'react';

const WeatherItem = ({ day, icon, tempmin, tempmax }) => {
  return (
    <li>
      <div className="weather-item">
        <p>{day}</p>
        <img
          src={require(`../../../assets/4th Set - Color/${icon}.png`)}
          alt="weather-icon"
        />
        <p>
          {Math.round(tempmin)}°/{Math.round(tempmax)}°
        </p>
      </div>
    </li>
  );
};

export default WeatherItem;

import './WeatherItem.css';
import React from 'react';

const WeatherItem = ({ day, icon, tempmin, tempmax }) => {
  return (
    <li>
      <div className="weather-item">
        <p className="day">{day}</p>
        <img
          src={require(`../../../assets/4th Set - Color/${icon}.png`)}
          alt="weather-icon"
        />
        <p className="temperature">
          {Math.round(tempmin)}°/{Math.round(tempmax)}°
        </p>
      </div>
    </li>
  );
};

export default WeatherItem;

import React, { useState, useEffect } from 'react';

const TodayWeather = ({ todayWeather, getWeekday }) => {
  return (
    <div className="today-weather">
      <p className="day">
        {getWeekday(new Date(todayWeather.days[0].datetime))}
      </p>
      <div className="temperature-container">
        <img
          src={require(`../../assets/4th Set - Color/${todayWeather.days[0].icon}.png`)}
          alt="weather-icon"
        />
        <p className="temperature">
          {todayWeather.days[0].temp}
          <sup>°C</sup>
        </p>
      </div>

      <p className="city">{todayWeather.address}</p>
    </div>
  );
};

export default TodayWeather;

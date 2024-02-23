import React, { useState } from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = ({ tripWeather, getWeekday }) => {
  return (
    <ul className="weather-list">
      {/* <WeatherItem></WeatherItem>
      <WeatherItem></WeatherItem>
      <WeatherItem></WeatherItem>
      <WeatherItem></WeatherItem> */}
      {tripWeather.days.map(day => (
        <WeatherItem
          key={day.datetime}
          day={getWeekday(new Date(day.datetime))}
          icon={day.icon}
          tempmin={day.tempmin}
          tempmax={day.tempmax}
        ></WeatherItem>
      ))}
    </ul>
  );
};

export default WeatherList;

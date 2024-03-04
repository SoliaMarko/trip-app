import './WeatherList.css';
import React, { useContext } from 'react';
import WeatherItem from './WeatherItem';
import { TimeContext, WeatherContext } from '../../../App';

const WeatherList = () => {
  const { tripWeather } = useContext(WeatherContext);
  const { getWeekday } = useContext(TimeContext);

  return (
    <ul className="weather-list">
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

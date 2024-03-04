import './TodayWeather.css';
import React from 'react';
import { useContext } from 'react';
import { TimeContext, WeatherContext } from '../../App';

const TodayWeather = () => {
  const { todayWeather } = useContext(WeatherContext);
  const { getWeekday } = useContext(TimeContext);

  return (
    <div className="today-weather">
      <p className="day">
        {getWeekday(new Date(todayWeather.days[0].datetime))}
      </p>
      <div className="temperature-container">
        <img
          className="weather-icon"
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

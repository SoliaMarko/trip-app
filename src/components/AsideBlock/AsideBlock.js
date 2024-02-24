import CountdownBlock from './CountdownBlock';
import TodayWeather from './TodayWeather';

function AsideBlock({ todayWeather, getWeekday, duration }) {
  return (
    <div className="aside-content-wrapper">
      <TodayWeather
        todayWeather={todayWeather}
        getWeekday={getWeekday}
      ></TodayWeather>
      <CountdownBlock duration={duration}></CountdownBlock>
    </div>
  );
}

export default AsideBlock;

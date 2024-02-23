import CountdownBlock from './CountdownBlock';
import TodayWeather from './TodayWeather';

function AsideBlock({ todayWeather, getWeekday }) {
  return (
    <div className="aside-content-wrapper">
      <TodayWeather
        todayWeather={todayWeather}
        getWeekday={getWeekday}
      ></TodayWeather>
      <CountdownBlock></CountdownBlock>
    </div>
  );
}

export default AsideBlock;

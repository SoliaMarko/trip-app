import CountdownBlock from './CountdownBlock';
import TodayWeather from './TodayWeather';

function AsideBlock({ todayWeather, getWeekday, timeLeftObj }) {
  return (
    <div className="aside-content-wrapper">
      <TodayWeather todayWeather={todayWeather} getWeekday={getWeekday} />
      <CountdownBlock timeLeftObj={timeLeftObj} />
    </div>
  );
}

export default AsideBlock;

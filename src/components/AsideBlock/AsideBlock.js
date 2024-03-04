import './AsideBlock.css';
import Countdown from './Countdown';
import TodayWeather from './TodayWeather';

function AsideBlock() {
  return (
    <div className="aside-content-wrapper">
      <TodayWeather />
      <Countdown />
    </div>
  );
}

export default AsideBlock;

import './AsideBlock.css';
import Countdown from './Countdown';
import TodayWeather from './TodayWeather';

const AsideBlock = () => {
  return (
    <div className="aside-content-wrapper">
      <TodayWeather />
      <Countdown />
    </div>
  );
};

export default AsideBlock;

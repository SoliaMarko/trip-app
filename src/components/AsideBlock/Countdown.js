import './Countdown.css';
import React, { useContext } from 'react';
import { TimeContext } from '../../App';

const Countdown = () => {
  const { timeLeftObj } = useContext(TimeContext);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.days}</span>{' '}
        <span className="countdown-unit">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.hours}</span>{' '}
        <span className="countdown-unit">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.minutes}</span>{' '}
        <span className="countdown-unit">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.seconds}</span>{' '}
        <span className="countdown-unit">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;

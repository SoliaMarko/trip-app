import React, { useState, useEffect } from 'react';
import { getFormattedTime } from '../../helpers/dateManipulations';

const CountdownBlock = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const timeLeftObj = getFormattedTime(time);

  return (
    <div className="countdown-block">
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.days}</span>{' '}
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.hours}</span>{' '}
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.minutes}</span>{' '}
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">{timeLeftObj.seconds}</span>{' '}
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownBlock;

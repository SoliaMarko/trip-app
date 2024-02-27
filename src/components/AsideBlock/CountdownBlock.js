import React, { useState, useEffect } from 'react';

const CountdownBlock = ({ timeLeftObj }) => {
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

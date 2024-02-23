import React, { useState } from 'react';

const CountdownBlock = () => {
  return (
    <div className="countdown-block">
      {/* <p>00 Days 00 Hours 00 Minutes 00 Seconds</p> */}
      <div className="countdown-item">
        <span className="countdown-digits">00</span> <span>Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">00</span> <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">00</span> <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-digits">00</span> <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownBlock;

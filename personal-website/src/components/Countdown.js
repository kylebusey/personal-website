import React, { Component } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function Countdown() {
    return React.createElement(
      FlipClockCountdown,
      {to: "12/1/2025"}
    );
}

export default Countdown


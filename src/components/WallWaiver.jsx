import React from 'react';
import './WallWaiver.css';

const WallWaiver = () => {
  return (
    <div className="wall-waiver-container">
      <h2 className="wall-waiver-heading">Wall Waiver</h2>
      <p className="wall-waiver-text">
        To be a part of the club and join us for any climbing activities, you must sign the wall waiver.
        It's required for all participants.
      </p>
      <button className="wall-waiver-button">
        Sign Waiver
      </button>
    </div>
  );
};

export default WallWaiver;
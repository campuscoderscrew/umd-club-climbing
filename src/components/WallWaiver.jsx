import React from 'react';
import './WallWaiver.css';
import Footer from './Footer';

const WaiverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11" />
  </svg>
);

const WallWaiver = () => {
  return (
    <div className="wall-waiver-container">
      <div className="wall-waiver-logo">
        <img src="//logo_2.jpg" alt="Club Logo" />
      </div>
      <h2 className="wall-waiver-heading">Wall Waiver</h2>
      <p className="wall-waiver-text">
        To be a part of the club and join us for any climbing activities, you must sign the wall waiver.
        It's required for all participants.
      </p>
      <button className="wall-waiver-button">
        <WaiverIcon />
        Sign Waiver
      </button>
      <p className="wall-waiver-footer">
        © 2025 CCC. Built with React. All rights reserved.
      </p>
    </div>
  );
};

export default WallWaiver;

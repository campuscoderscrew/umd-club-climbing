import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <div className="video-card">
          <div className="instagram-handle">@umdclubclimbing</div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="video-player"
          >
            <source src="/videos/video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="video-card">
          <div className="instagram-handle">@umdclubclimbing</div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="video-player"
          >
            <source src="/videos/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="video-card">
          <div className="instagram-handle">@umdclubclimbing</div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="video-player"
          >
            <source src="/videos/video-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
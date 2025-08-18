import React, { useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Video needs to be 50% visible to play
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all 3 video elements
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Cleanup function
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div className="video-section">
      <div className="video-container">
        <div className="video-card">
          <div className="instagram-handle">@umdclubclimbing</div>
          <video 
            ref={(el) => videoRefs.current[0] = el}
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
            ref={(el) => videoRefs.current[1] = el}
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
            ref={(el) => videoRefs.current[2] = el}
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
import React, { useEffect, useRef, useState } from 'react';
import './Text.css';

const Text = ({ highlight = "Our Mission", title, description, marginTop = '100px' }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`text-container ${visible ? 'animate' : ''}`}
      style={{ marginTop }}
    >
      <h3 id="highlight">{highlight}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Text;

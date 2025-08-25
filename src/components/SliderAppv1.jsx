import React, { useState, useEffect, useRef, useCallback } from 'react';

const SliderApp = () => {
  const sliderData = [
    { title: "Crushing the Crux", img: "/umdclub_1.jpg", url: "" },
    { title: "Sunset Sends", img: "/umdclub_2.jpg", url: "" },
    { title: "Belay and Beyond", img: "/umdclub_3.jpg", url: "" },
    { title: "Trail to the Wall", img: "/umdclub_4.jpg", url: "" },
    { title: "Summit Dreams", img: "/umdclub_5.jpg", url: "" },
    { title: "Great Falls", img: "/umdclub_6.jpg", url: "" },
    { title: "Sugarlove Mountain", img: "/umdclub_7.jpg", url: "" }
  ];

  const config = {
    SCROLL_SPEED: 1.75,
    LERP_FACTOR: 0.05,
    MAX_VELOCITY: 150
  };

  const [state, setState] = useState({
    currentX: 0,
    targetX: 0,
    slideWidth: 390,
    isDragging: false,
    startX: 0,
    lastX: 0,
    lastMouseX: 0,
    lastScrollTime: Date.now(),
    isMoving: false,
    velocity: 0,
    lastCurrentX: 0,
    dragDistance: 0,
    hasActuallyDragged: false,
    isMobile: false,
    isHorizontallyDragging: false,
  });

  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const slidesRef = useRef([]);

  const checkMobile = useCallback(() => {
    const isMobile = window.innerWidth < 1000;
    setState(prev => ({ ...prev, isMobile }));
    return isMobile;
  }, []);

  const initializeSlides = useCallback(() => {
    const isMobile = checkMobile();
    const slideWidth = isMobile ? 215 : 390;
    const copies = 6;
    const totalSlides = sliderData.length * copies;
    const startOffset = -(sliderData.length * slideWidth * 2);

    setState(prev => ({
      ...prev,
      slideWidth,
      currentX: startOffset,
      targetX: startOffset
    }));

    slidesRef.current = [];
  }, [checkMobile]);

  const updateSlidePositions = useCallback(() => {
    const sequenceWidth = state.slideWidth * sliderData.length;

    setState(prev => {
      let newCurrentX = prev.currentX;
      let newTargetX = prev.targetX;

      if (newCurrentX > -sequenceWidth * 1) {
        newCurrentX -= sequenceWidth;
        newTargetX -= sequenceWidth;
      } else if (newCurrentX < -sequenceWidth * 4) {
        newCurrentX += sequenceWidth;
        newTargetX += sequenceWidth;
      }

      trackRef.current.style.transform = `translate3d(${newCurrentX}px,0,0)`;

      return { ...prev, currentX: newCurrentX, targetX: newTargetX };
    });
  }, [state.slideWidth]);

  const updateParallax = useCallback(() => {
    const viewportCenter = window.innerWidth / 2;

    slidesRef.current.forEach((slide) => {
      if (!slide) return;
      const img = slide.querySelector('img');
      if (!img) return;

      const slideRect = slide.getBoundingClientRect();
      if (slideRect.right < -500 || slideRect.left > window.innerWidth + 500) return;

      const slideCenter = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = slideCenter - viewportCenter;
      const parallaxOffset = distanceFromCenter * -0.05;

      img.style.transform = `translateX(${parallaxOffset}px) scale(1.2)`;
    });
  }, []);

  const updateMovingState = useCallback(() => {
    setState(prev => {
      const velocity = Math.abs(prev.currentX - prev.lastCurrentX);
      const isSlowEnough = velocity < 0.1;
      const hasBeenStillLongEnough = Date.now() - prev.lastScrollTime > 200;

      const isMoving =
        prev.isHorizontallyDragging && (prev.hasActuallyDragged || !isSlowEnough || !hasBeenStillLongEnough);

      document.documentElement.style.setProperty('--custom-slider-moving', isMoving ? '1' : '0');

      return {
        ...prev,
        velocity,
        lastCurrentX: prev.currentX,
        isMoving
      };
    });
  }, []);

  const animate = useCallback(() => {
    setState(prev => {
      const newCurrentX = prev.currentX + (prev.targetX - prev.currentX) * config.LERP_FACTOR;
      return { ...prev, currentX: newCurrentX };
    });

    updateMovingState();
    updateSlidePositions();
    updateParallax();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateMovingState, updateSlidePositions, updateParallax]);

  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaX) < 1) return;

    e.preventDefault();
    const scrollDelta = e.deltaX * config.SCROLL_SPEED;
    const clampedDelta = Math.max(Math.min(scrollDelta, config.MAX_VELOCITY), -config.MAX_VELOCITY);

    setState(prev => ({
      ...prev,
      targetX: prev.targetX - clampedDelta,
      lastScrollTime: Date.now()
    }));
  }, []);

  const handleTouchStart = useCallback((e) => {
    setState(prev => ({
      ...prev,
      isDragging: true,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      lastX: prev.targetX,
      dragDistance: 0,
      hasActuallyDragged: false,
      lastScrollTime: Date.now()
    }));
  }, []);

  const handleTouchMove = useCallback((e) => {
    setState(prev => {
      if (!prev.isDragging) return prev;

      const touch = e.touches[0];
      const startY = prev.startY ?? touch.clientY;
      const deltaX = touch.clientX - prev.startX;
      const deltaY = touch.clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        const newDragDistance = Math.abs(deltaX);

        return {
          ...prev,
          startY,
          targetX: prev.lastX + deltaX * 1.5,
          dragDistance: newDragDistance,
          hasActuallyDragged: newDragDistance > 5,
          lastScrollTime: Date.now(),
          isHorizontallyDragging: true
        };
      }

      return { ...prev, isHorizontallyDragging: false };
    });
  }, []);

  const handleTouchEnd = useCallback(() => {
    setState(prev => ({ ...prev, isDragging: false, isHorizontallyDragging: false }));
    setTimeout(() => {
      setState(prev => ({ ...prev, hasActuallyDragged: false }));
    }, 100);
  }, []);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setState(prev => ({
      ...prev,
      isDragging: true,
      startX: e.clientX,
      lastMouseX: e.clientX,
      lastX: prev.targetX,
      dragDistance: 0,
      hasActuallyDragged: false,
      lastScrollTime: Date.now()
    }));
  }, []);

  const handleMouseMove = useCallback((e) => {
    setState(prev => {
      if (!prev.isDragging) return prev;

      e.preventDefault();
      const deltaX = (e.clientX - prev.lastMouseX) * 2;
      const newDragDistance = prev.dragDistance + Math.abs(deltaX);

      return {
        ...prev,
        targetX: prev.targetX + deltaX,
        lastMouseX: e.clientX,
        dragDistance: newDragDistance,
        hasActuallyDragged: newDragDistance > 5,
        lastScrollTime: Date.now()
      };
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    setState(prev => ({ ...prev, isDragging: false }));
    setTimeout(() => {
      setState(prev => ({ ...prev, hasActuallyDragged: false }));
    }, 100);
  }, []);

  const handleResize = useCallback(() => {
    initializeSlides();
  }, [initializeSlides]);

  const handleSlideClick = useCallback((url, dragDistance, hasActuallyDragged) => {
    if (dragDistance < 10 && !hasActuallyDragged) {
      window.open(url, '_blank');
    }
  }, []);

  useEffect(() => {
    initializeSlides();
    animationRef.current = requestAnimationFrame(animate);

    const slider = document.querySelector('.custom-slider');
    if (slider) {
      slider.addEventListener('wheel', handleWheel, { passive: false });
      slider.addEventListener('touchmove', handleTouchMove, { passive: false });
      slider.addEventListener('dragstart', (e) => e.preventDefault());
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (slider) {
        slider.removeEventListener('wheel', handleWheel);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('dragstart', (e) => e.preventDefault());
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, handleWheel, handleMouseMove, handleMouseUp, handleResize, initializeSlides, handleTouchMove]);

  const renderSlides = () => {
    const copies = 6;
    const totalSlides = sliderData.length * copies;
    const slides = [];

    for (let i = 0; i < totalSlides; i++) {
      const dataIndex = i % sliderData.length;
      const slideData = sliderData[dataIndex];

      slides.push(
        <div
          key={i}
          className="custom-slide"
          ref={el => slidesRef.current[i] = el}
          style={{
            width: state.isMobile ? '175px' : '350px',
            height: state.isMobile ? '250px' : '500px'
          }}
          onClick={() => handleSlideClick(slideData.url, state.dragDistance, state.hasActuallyDragged)}
        >
          <div className="custom-slide-image">
            <img 
              src={slideData.img} 
              alt={slideData.title}
              draggable={false}
            />
          </div>
          <div className="custom-slide-overlay">
            <p className="custom-project-title">{slideData.title}</p>
            <div className="custom-project-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }

    return slides;
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "DM Mono", monospace; background-color: #0f0f0f; color: #fff; overflow-x: hidden; }

        .custom-slider { position: relative; width: 100%; height: clamp(300px, 50vw, 700px); overflow: hidden; user-select: none; top: 50%; }
        .custom-slide-track { position: absolute; width: 100%; height: 80%; display: flex; }

        .custom-slide {
          flex-shrink: 0; margin: 0 20px; position: relative; top: 50%; transform: translateY(-50%);
          overflow: visible; flex-direction: column; cursor: pointer;
        }

        .custom-slide-image { width: 100%; height: 100%; overflow: hidden; flex: 1; }
        .custom-slide-image img {
          width: 100%; height: 100%; object-fit: cover; will-change: transform; transform: scale(1); user-select: none;
        }

        .custom-slide-overlay {
          position: absolute; bottom: -1.75rem; left: 0; right: 0;
          display: flex; justify-content: space-between; align-items: center;
          pointer-events: none; z-index: 10; transition: opacity 0.3s ease; opacity: 0;
        }

        .custom-slide:hover .custom-slide-overlay { opacity: calc(1 - var(--custom-slider-moving, 1)); }

        .custom-project-title { font-weight: 500; font-size: 0.8rem; }
        .custom-project-arrow { width: 16px; height: 16px; }
        .custom-project-arrow svg { stroke: #fff; stroke-width: 2; }

        .custom-instructions { position: absolute; top: 50px; left: 50%; transform: translateX(-50%); font-size: 0.9rem; opacity: 0.7; z-index: 100; text-align: center; }
      `}</style>

      <div 
        className="custom-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
      >
        <div className="custom-slide-track" ref={trackRef}>
          {renderSlides()}
        </div>
      </div>
    </div>
  );
};

export default SliderApp;

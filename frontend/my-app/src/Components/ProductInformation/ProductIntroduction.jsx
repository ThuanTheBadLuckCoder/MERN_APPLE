import React, { useContext, useRef, useEffect, useState } from 'react';
import ProductCategoriesContext from './ProductCategoriesContext.js';
import './styles/ProductIntro.css';

// Floating Play/Pause Icon
const PlayIcon = ({ paused }) => (
  paused ? (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="14" fill="#fff" opacity="0.7"/>
      <rect x="10" y="9" width="3" height="10" rx="1" fill="#000"/>
      <rect x="15" y="9" width="3" height="10" rx="1" fill="#000"/>
    </svg>
  ) : (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="14" fill="#fff" opacity="0.7"/>
      <polygon points="11,9 20,14 11,19" fill="#000"/>
    </svg>
  )
);

const ProductIntroduction = (props) => {
  const productCategories = useContext(ProductCategoriesContext);
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [videoScale, setVideoScale] = useState(1);

  // Staggered fade-in
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.stagger-fade');
    fadeEls.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 120 + 100}ms`;
      el.classList.add('fade-in');
    });
  }, []);

  // Parallax/scale effect on video container
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.apple-media-container');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Scale between 1 and 1.04 as it enters viewport
      let scale = 1 + Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight)) * 0.04;
      setVideoScale(scale);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play/Pause handler
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[1680px] w-full px-4">
      <div className="flex flex-row justify-between flex-wrap w-full items-center">
        <h1 className="stagger-fade text-3xl md:text-5xl font-bold mb-2">{productCategories}</h1>
        <p
          className="stagger-fade text-lg md:text-2xl font-semibold"
          style={{
            fontSize: '28px',
            lineHeight: '1.1428571429',
            fontWeight: '600',
            letterSpacing: '.007em'
          }}
        >
          {props.productSlogan.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Apple-style Video/Image Container with Parallax/Scale */}
      <div className="w-full flex justify-center items-center my-10">
        <div
          className="apple-media-container relative bg-white overflow-hidden"
          style={{ transform: `scale(${videoScale})` }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={props.productVideoIntro}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="gradient-scrim" />
          <button
            className="floating-btn"
            aria-label="Play/Pause"
            onClick={handlePlayPause}
          >
            <PlayIcon paused={paused} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductIntroduction;
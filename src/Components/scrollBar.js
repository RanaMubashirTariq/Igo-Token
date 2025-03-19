import React, { useRef, useEffect } from 'react';
import './ScrollBar.css';

export default function ScrollBar() {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollbarRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        container.style.setProperty(
          '--scrollbar-color',
          `rgba(15, 111, 255, ${0.5 + scrollPercentage / 100})`
        );
      }
    };

    const container = scrollbarRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='part-7-main-d'>
      <div className='scrollbar-container' ref={scrollbarRef}>
        <div className='inner-content-d'>
          <div className='part-1-content-d'>
            <div className='icon-section'>
              <img src="/Pictures/discover-uniqe.svg" alt="" />
              <h2>Discover Unique Digital Assets</h2>
            </div>
            <div className='part-1-inner-content-d'>
              <p>Explore a diverse range of digital collectibles, including artwork, music, videos, virtual real estate, and more, each authenticated and secured by blockchain technology.</p>
            </div>
          </div>
          <div className='part-1-content-d'>
            <div className='icon-section'>
              <img src="/Pictures/personalized.svg" alt="" />
              <h2>Personalized Recommendations</h2>
            </div>
            <div className='part-1-inner-content-d'>
              <p>Receive personalized recommendations based on your interests and preferences, ensuring that you never miss out on the latest drops or trending NFTs.</p>
            </div>
          </div>



          {/*  part 3 */}


          <div className='part-1-content-d'>
            <div className='icon-section'>
              <img src="/Pictures/personalized.svg" alt="" />
              <h2>Personalized Recommendations</h2>
            </div>
            <div className='part-1-inner-content-d'>
              <p>Receive personalized recommendations based on your interests and preferences, ensuring that you never miss out on the latest drops or trending NFTs.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
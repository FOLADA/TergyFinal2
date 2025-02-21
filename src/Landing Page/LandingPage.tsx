import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import WhatWeOffer from '../components/WhatDoWeOffer/Offers';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'პლატფრომა, რომლის წყალობითაც გასხივოსნდები';
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length - 1) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="landingpage-container">
        <div className="landingpage-text-div">
          <p className="tergi-p">{typedText}</p>
          <h1 className="tergi-h1">თერგი</h1>
          <h2 className="landingpage-h2">შეისისხლხორცე ქართული</h2>
         <Link to={"/რეგისტრაცია"}> <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="landingpage-button"
          >
            ახლავე
          </button></Link>
        </div>
        {visible && (
          <span
            className="cursor-follow"
            style={{ left: position.x + 15, top: position.y + 15 }}
          >
            შემოგვიერთდი!
          </span>
        )}
        <div className="landingpage-img-div">
          <img
            className="landingpage-img"
            src="landingpagelogo.png"
            alt="landing page logo"
          />
        </div>
      </div>

      <div className="falling-text">
        <span className="floating-georgian"><img style={{width:"30px", height:"30px"}} src="Flag.png" alt="" /></span>
      </div>
      <WhatWeOffer/>
    </>
  );
};

export default LandingPage;

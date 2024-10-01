import React, { useState } from 'react';
import '../FlipCard.css';

// FlipCard.js
const Flipcard = ({ frontContent, backContent }) => {
    const [flipped, setFlipped] = useState(false);
  
    const handleClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{frontContent.title}</h2>
            <p>{frontContent.description}</p>
            <img src={frontContent.image} alt={frontContent.title} />
          </div>
          <div className="flip-card-back">
            <h2>{backContent.title}</h2>
            <p>{backContent.fact}</p>
            <img src={backContent.image} alt={backContent.title} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Flipcard;
  
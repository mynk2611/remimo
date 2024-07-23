"use client"
import React, { useEffect, useState, CSSProperties } from 'react';
import { motion } from 'framer-motion';

const cardColors = [
  'bg-red-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-blue-500',
];

const Card: React.FC<{ color: string; style: CSSProperties }> = ({ color, style }) => (
  <motion.div
    className={`absolute w-80 h-48 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl ${color}`}
    style={style}
  >
    Card
  </motion.div>
);

const CardCarousel: React.FC = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % cardColors.length);
    }, 3000); // Adjust the speed here
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const totalCards = cardColors.length;
    const adjustedIndex = (index - position + totalCards) % totalCards;

    let xOffset = 0;
    let scale = 1;
    let zIndex = 0;
    let opacity = 1;
    let rotateY = 0;
    let rotateX = 0;

    switch (adjustedIndex) {
      case 0: // Smallest, furthest left
        xOffset = -250; // Increased spacing
        scale = 0.7;
        zIndex = 1;
        opacity = 0.5; // to keep it partially visible during transition
        rotateY = 50; // Rotate to skew the card
        break;
      case 1: // Smaller, second furthest left
        xOffset = -150; // Increased spacing
        scale = 0.85;
        zIndex = 2;
        rotateY = 30; // Rotate to skew the card
        break;
      case 2: // Biggest, center front
        xOffset = 0;
        scale = 1;
        zIndex = 4;
        rotateY = -360;
        break;
      case 3: // Smaller, right
        xOffset = 150; // Increased spacing
        scale = 0.85;
        zIndex = 3;
        rotateY = -30; // Rotate to skew the card
        break;
      case 4: // Smallest, new card from right
        xOffset = 250; // Increased spacing
        scale = 0.7;
        zIndex = 1;
        opacity = 0.5; // to keep it partially visible during transition
        rotateY = 30; // Rotate to skew the card
        break;
      default:
        break;
    }

    return {
      transform: `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      zIndex,
      opacity,
      transition: 'transform 1s ease, opacity 1s ease',
      transformStyle: 'preserve-3d' as 'preserve-3d', // Correctly cast transformStyle
    } as CSSProperties;
  };

  return (
    <div className="relative w-full h-64 overflow-hidden flex justify-center" style={{ perspective: '1000px' }}>
      {cardColors.map((color, index) => (
        <Card key={index} color={color} style={getCardStyle(index)} />
      ))}
    </div>
  );
};

export default CardCarousel;

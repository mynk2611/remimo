"use client"
import React, { useEffect, useState, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { LockedIcon } from '@repo/ui/lockedIcon';
import Card from '@repo/ui/card';
import { MoneyIcon } from '@repo/ui/moneyIcon';
import { ReceiptIcon } from '@repo/ui/receiptIcon';
import { WalletIcon } from '@repo/ui/walletIcon';

const CardCarousel: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [transitioning, setTransitioning] = useState(-1);
  const [delayedTransitioning, setDelayedTransitioning] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(position);
      setTimeout(() => {
        setDelayedTransitioning(position);
      }, 900); // Delay for 500 milliseconds
      setTimeout(() => {
        setPosition((prev) => (prev + 1) % 4);
        setTransitioning(-1);
        setDelayedTransitioning(-1);
      }, 1000); // Adjust this timing to match the transition duration
    }, 3000); // Adjust the speed here
    return () => clearInterval(interval);
  }, [position]);

  const getCardStyle = (index: number) => {
    const totalCards = 4;
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
        opacity = delayedTransitioning === index ? 0 : 0.5; // Make it invisible during delayed transition
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
        opacity = 0.5; // Partially visible
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
    <div className="relative py-2 w-full h-64 mb-20 overflow-hidden flex justify-center" style={{ perspective: '1000px' }}>
      <Card
        key={0}
        style={getCardStyle(0)}
        title="Locked Balance"
        value="$ 0"
        color="purple"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-500"
        width="w-72"
        height="h-40"
        mt="mt-10"
        icon={<LockedIcon  />}
      />
      <Card
        key={1}
        style={getCardStyle(1)}
        title="Expenditure"
        value="$ 829"
        color="purple"
        gradientFrom="from-gray-300"
        gradientTo="to-gray-700"
        width="w-72"
        height="h-40"
        mt="mt-10"
        icon={<ReceiptIcon />}
      />
      <Card
        key={2}
        style={getCardStyle(2)}
        title="unlocked Balance"
        value="$ 34500"
        color="purple"
        gradientFrom="from-green-500"
        gradientTo="to-teal-500"
        width="w-72"
        height="h-40"
        mt="mt-10"
        icon={<MoneyIcon />}
      />
      <Card
        key={3}
        style={getCardStyle(3)}
        title="Wallet"
        value="$ 48869"
        color="purple"
        gradientFrom="from-pink-500"
        gradientTo="to-red-700"
        width="w-72"
        height="h-40"
        mt="mt-10"
        icon={<WalletIcon className="size-24 mt-2" />}
      />
    </div>
  );
};

export default CardCarousel;

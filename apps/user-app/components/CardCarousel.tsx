"use client"
import React, { useEffect, useState, CSSProperties } from 'react';
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
      }, 900);
      setTimeout(() => {
        setPosition((prev) => (prev + 1) % 4);
        setTransitioning(-1);
        setDelayedTransitioning(-1);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [position]);

  const getCardStyle = (index: number) => {
    const totalCards = 4;
    const adjustedIndex = (index - position + totalCards) % totalCards;

    // Responsive xOffset and scale values based on screen size
    const screenWidth = window.innerWidth;
    let xOffset = 0;
    let scale = 1;
    let zIndex = 0;
    let opacity = 1;
    let rotateY = 0;
    let rotateX = 0;

    if (screenWidth < 640) { // Mobile
      switch (adjustedIndex) {
        case 0:
          xOffset = -120;
          scale = 0.6;
          zIndex = 1;
          opacity = delayedTransitioning === index ? 0 : 0.5;
          rotateY = 50;
          break;
        case 1:
          xOffset = -60;
          scale = 0.75;
          zIndex = 2;
          rotateY = 30;
          break;
        case 2:
          xOffset = 0;
          scale = 0.9;
          zIndex = 4;
          rotateY = -360;
          break;
        case 3:
          xOffset = 60;
          scale = 0.75;
          zIndex = 3;
          rotateY = -30;
          break;
        case 4:
          xOffset = 120;
          scale = 0.6;
          zIndex = 1;
          opacity = 0.5;
          rotateY = 30;
          break;
        default:
          break;
      }
    } else if (screenWidth < 1024) { // Tablet
      switch (adjustedIndex) {
        case 0:
          xOffset = -150;
          scale = 0.7;
          zIndex = 1;
          opacity = delayedTransitioning === index ? 0 : 0.5;
          rotateY = 50;
          break;
        case 1:
          xOffset = -75;
          scale = 0.85;
          zIndex = 2;
          rotateY = 30;
          break;
        case 2:
          xOffset = 0;
          scale = 1;
          zIndex = 4;
          rotateY = -360;
          break;
        case 3:
          xOffset = 75;
          scale = 0.85;
          zIndex = 3;
          rotateY = -30;
          break;
        case 4:
          xOffset = 150;
          scale = 0.7;
          zIndex = 1;
          opacity = 0.5;
          rotateY = 30;
          break;
        default:
          break;
      }
    } else { // Desktop
      switch (adjustedIndex) {
        case 0:
          xOffset = -250;
          scale = 0.7;
          zIndex = 1;
          opacity = delayedTransitioning === index ? 0 : 0.5;
          rotateY = 50;
          break;
        case 1:
          xOffset = -150;
          scale = 0.85;
          zIndex = 2;
          rotateY = 30;
          break;
        case 2:
          xOffset = 0;
          scale = 1;
          zIndex = 4;
          rotateY = -360;
          break;
        case 3:
          xOffset = 150;
          scale = 0.85;
          zIndex = 3;
          rotateY = -30;
          break;
        case 4:
          xOffset = 250;
          scale = 0.7;
          zIndex = 1;
          opacity = 0.5;
          rotateY = 30;
          break;
        default:
          break;
      }
    }

    return {
      transform: `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      zIndex,
      opacity,
      transition: 'transform 1s ease, opacity 1s ease',
      transformStyle: 'preserve-3d' as 'preserve-3d',
    } as CSSProperties;
  };

  return (
    <div
      className="relative py-2 w-full h-64 mb-0 sm:mb-20 overflow-hidden flex justify-center sm:h-80 md:h-96 lg:h-112 xl:h-128"
      style={{ perspective: '1000px' }}
    >
      <Card
        key={0}
        style={getCardStyle(0)}
        title="Locked Balance"
        value=" 0"
        color="purple"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-500"
        width="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
        height="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 "
        mt="mt-10 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-28"
        icon={<LockedIcon />}
      />
      <Card
        key={1}
        style={getCardStyle(1)}
        title="Expenditure"
        value=" 829"
        color="purple"
        gradientFrom="from-gray-300"
        gradientTo="to-gray-700"
        width="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
        height="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 "
        mt="mt-10 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-28"
        icon={<ReceiptIcon />}
      />
      <Card
        key={2}
        style={getCardStyle(2)}
        title="Unlocked Balance"
        value=" 34500"
        color="purple"
        gradientFrom="from-green-500"
        gradientTo="to-teal-500"
        width="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
        height="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 "
        mt="mt-10 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-28"
        icon={<MoneyIcon />}
      />
      <Card
        key={3}
        style={getCardStyle(3)}
        title="Wallet"
        value=" 48869"
        color="purple"
        gradientFrom="from-pink-500"
        gradientTo="to-red-700"
        width="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
        height="h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 "
        mt="mt-10 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-28"
        icon={<WalletIcon className="size-28 mt-16" />}
      />
    </div>
  );
};

export default CardCarousel;

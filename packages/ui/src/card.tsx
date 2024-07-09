// components/Card.tsx
"use client"
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  value: string;
  dateRange?: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  width : string;
  height : string;
  icon : React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, dateRange, color, gradientFrom, gradientTo, width ="w-64", height = "h-36", icon }) => {
  return (
    <motion.div
      className={`relative ${width} ${height} rounded-lg shadow-lg p-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="spotlight"></div>
      </div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base font-bold">{title}</h2>
        </div>

        <div className='flex justify-between '>
          <div>
               {icon}         
          </div>
          <div className="mt-10 text-2xl font-bold">{value}</div>
        </div>
        {/* {dateRange && <p className="text-sm">{dateRange}</p>} */}
      </div>
    </motion.div>
  );
};

export default Card;


// components/Card.tsx
"use client"
import { motion } from 'framer-motion';

interface CardProps {
  key?: number;
  style?: any;
  title: string;
  value: number | string;
  dateRange?: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  width: string;
  height: string;
  icon: React.ReactNode;
  mt: string
}

const Card: React.FC<CardProps> = ({ key, style, title, value, dateRange, color, gradientFrom, gradientTo, width = "w-64", height = "h-36", icon, mt }) => {
  return (
    <motion.div
      style={style}
      className={`${style ? "absolute" : "relative"} ${width} ${height} rounded-lg shadow-lg p-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} ${style ? "border" : ""} text-white overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={style ? {} : {
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Spotlight effect */}
      {style ? null :
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spotlight"></div>
        </div>
      }
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-base sm:text-xl md:text-lg font-bold md:font-semibold">{title}</h2>
        </div>

        <div className='flex justify-between '>
          <div>
            {icon}
          </div>
          <div className={`${mt} text-xl md:text-xl font-bold md:font-medium`}>${value}</div>
        </div>
        {/* {dateRange && <p className="text-sm">{dateRange}</p>} */}
      </div>
    </motion.div>
  );
};

export default Card;


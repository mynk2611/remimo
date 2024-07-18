// components/Card.tsx
"use client"
import { motion } from 'framer-motion';

interface StatusCardProps {
    status: string;
    dateRange?: string;
    color: string;
    gradientFrom: string;
    gradientTo: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ status, dateRange, color, gradientFrom, gradientTo }) => {
    return (
        <motion.div
            className={`relative w-16 h-8 rounded-lg shadow-lg  bg-gradient-to-r ${gradientFrom} ${gradientTo} text-black overflow-hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -2,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.1 },
            }}
        >
            {/* Spotlight effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="spotlight"></div>
            </div>
            <div className='flex flex-col justify-center h-full'>
                <div className="relative z-10 flex justify-center">
                    <div className='flex flex-col justify-center  text-black text-xs font-semibold'>
                        {status}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StatusCard;


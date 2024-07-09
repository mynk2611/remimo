"use client";
import { motion } from "framer-motion";
import { WalletIcon } from "./walletIcon";
import { LockedIcon } from "./lockedIcon";

interface CardProps {
    title: string;
    value: string;
    dateRange?: string;
    color: string;
    gradientFrom: string;
    gradientTo: string;
}

const Card: React.FC<CardProps> = ({
    title,
    value,
    dateRange,
    color,
    gradientFrom,
    gradientTo,
}) => {
    return (
        <motion.div
            className={`relative w-64 h-36 rounded-lg shadow-lg p-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white overflow-hidden`}
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

                <div className="mt-10 text-2xl font-bold">{value}</div>
                {dateRange && <p className="text-sm">{dateRange}</p>}
            </div>

            {/* Wave effect */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
                <svg
                    className="absolute bottom-0 left-0 w-full h-full opacity-20"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        transform="scale(-1, 1) translate(-1440, 0)"
                        d="M0,80 C320,160 640,40 960,120 C1280,200 1600,80 1920,160 C2240,240 2560,120 2880,200 L2880,320 L0,320 Z"
                    ></path>
                </svg>
            </div>
        </motion.div>
    );
};

export default Card;

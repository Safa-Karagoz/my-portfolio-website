import React, { useState } from 'react';

const AppToolBar = ({ onClose, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClose = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className="popup">
            <div 
                className="flex items-center justify-between p-2 sm:p-2 rounded-t-lg" 
                style={{ backgroundColor: color }}
            >
                <div
                    className="flex gap-1.5 sm:gap-1.5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button
                        className={`
                            w-5 h-5 sm:w-3 sm:h-3 
                            rounded-full 
                            border-0 
                            outline-none 
                            p-0 
                            cursor-pointer 
                            relative 
                            flex 
                            items-center 
                            justify-center 
                            transition-colors 
                            duration-200
                            bg-[#FF5F57]
                            touch-manipulation
                        `}
                        onClick={handleClose}
                    >
                        <span className={`
                            absolute 
                            top-1/2 
                            left-1/2 
                            -translate-x-1/2 
                            -translate-y-[6px]
                            text-[14px]
                            sm:text-[10px]
                            leading-none 
                            text-gray-600 
                            transition-opacity 
                            duration-200 
                            pointer-events-none 
                            select-none
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}>
                            ×
                        </span>
                    </button>

                    <button
                        className={`
                            w-5 h-5 sm:w-3 sm:h-3
                            rounded-full 
                            border-0 
                            outline-none 
                            p-0 
                            cursor-pointer 
                            relative 
                            flex 
                            items-center 
                            justify-center 
                            transition-colors 
                            duration-200
                            bg-[#FFBD2E]
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className={`
                            absolute 
                            top-1/2 
                            left-1/2 
                            -translate-x-1/2 
                            -translate-y-[6px]
                            text-[14px]
                            sm:text-[10px]
                            leading-none 
                            text-gray-600 
                            transition-opacity 
                            duration-200 
                            pointer-events-none 
                            select-none
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}>
                            -
                        </span>
                    </button>

                    <button
                        className={`
                            w-5 h-5 sm:w-3 sm:h-3
                            rounded-full 
                            border-0 
                            outline-none 
                            p-0 
                            cursor-pointer 
                            relative 
                            flex 
                            items-center 
                            justify-center 
                            transition-colors 
                            duration-200
                            bg-[#27C93F]
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className={`
                            absolute 
                            top-1/2 
                            left-1/2 
                            -translate-x-1/2 
                            -translate-y-[6px]
                            text-[14px]
                            sm:text-[10px]
                            leading-none 
                            text-gray-600 
                            transition-opacity 
                            duration-200 
                            pointer-events-none 
                            select-none
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                        `}>
                            +
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AppToolBar;
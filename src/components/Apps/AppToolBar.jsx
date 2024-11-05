import React, { useState } from 'react';

const AppToolBar = ({ onClose, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonClasses = "w-3 h-3 rounded-full border-0 outline-none p-0 cursor-pointer relative flex items-center justify-center transition-colors duration-200";
    const symbolClasses = "absolute top-1/2 left-1/2 -translate-x-1/2 text-[10px] leading-none text-gray-600 transition-opacity duration-200 pointer-events-none select-none";

    const handleClose = (e) => {
        e.stopPropagation(); // Prevent drag handler from interfering
        onClose();
    };

    return (
        <div className="popup">
            <div className="flex items-center justify-between p-2 rounded-t-lg" style={{ backgroundColor: color }} >
                <div
                    className="flex gap-1.5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button
                        className={`${buttonClasses} bg-[#FF5F57]`}
                        onClick={handleClose}
                    >
                        <span className={`${symbolClasses} -translate-y-[5px] font-bold ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}>
                            ×
                        </span>
                    </button>

                    <button
                        className={`${buttonClasses} bg-[#FFBD2E]`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className={`${symbolClasses} -translate-y-[6px] ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}>
                            -
                        </span>
                    </button>

                    <button
                        className={`${buttonClasses} bg-[#27C93F]`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className={`${symbolClasses} -translate-y-[6px] ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}>
                            +
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AppToolBar;
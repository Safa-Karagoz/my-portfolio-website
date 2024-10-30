import React, { useState } from 'react';

const AppToolBar = ({setShowPopup}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const buttonClasses = "w-3 h-3 rounded-full border-0 outline-none p-0 cursor-pointer relative flex items-center justify-center transition-colors duration-200";
    const symbolClasses = "absolute top-1/2 left-1/2 -translate-x-1/2 text-[10px] leading-none text-gray-600 transition-opacity duration-200 pointer-events-none select-none";

    return (
        <div className="popup">
            <div className="flex items-center justify-between p-2 bg-[#f0f0f0] rounded-t-lg">
                <div 
                    className="flex gap-1.5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button 
                        className={`${buttonClasses} bg-[#FF5F57]`}
                        onClick={() => setShowPopup(false)}
                    >
                        <span className={`${symbolClasses} -translate-y-[5px] font-bold ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                            ×
                        </span>
                    </button>

                    <button 
                        className={`${buttonClasses} bg-[#FFBD2E]`}
                    >
                        <span className={`${symbolClasses} -translate-y-[6px] ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                            -
                        </span>
                    </button>

                    <button 
                        className={`${buttonClasses} bg-[#27C93F]`}
                    >
                        <span className={`${symbolClasses} -translate-y-[6px] ${
                            isHovered ? 'opacity-100' : 'opacity-0'
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
import React, { useState, useEffect } from 'react';
import siriIcon from '../assets/mac-tool-bar/siri-icon.png';
import spotlightIcon from '../assets/mac-tool-bar/spotlight-icon.png';
import wifiIcon from '../assets/mac-tool-bar/wifi-icon.png';
import batteryIcon from '../assets/mac-tool-bar/battery-icon.png';
import controlCenterIcon from '../assets/mac-tool-bar/control-center-icon.webp';

const MacToolbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = currentDateTime.toLocaleString('default', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }).replace(',', '');

    const formattedTime = currentDateTime.toLocaleString('default', {
        hour: 'numeric',
        minute: '2-digit'
    });

    return (
        <div className="flex justify-between items-center bg-black/20 backdrop-blur-sm h-6 px-4 font-roboto shadow text-white sticky top-0 left-0 right-0 z-50 text-xs font-normal">
            <div className="flex items-center">
                <svg
                    className="h-[14px] w-[14px] text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="mx-2 font-bold">Finder</span>
                <span className="hidden md:inline-block mx-2">File</span>
                <span className="hidden md:inline-block mx-2">Edit</span>
                <span className="hidden md:inline-block mx-2">View</span>
                <span className="hidden md:inline-block mx-2">Go</span>
                <span className="hidden md:inline-block mx-2">Window</span>
                <span className="hidden md:inline-block mx-2">Help</span>
            </div>
            <div className="flex flex-row-reverse gap-4">
                <span className=''>{formattedDate} {formattedTime}</span>
                <img className="h-[14px] m-auto" src={siriIcon} alt="" />
                <img className="h-[14px] m-auto" src={controlCenterIcon} alt="" />
                <img className="h-[14px] m-auto" src={spotlightIcon} alt="" />
                <img className="h-[10px] m-auto" src={batteryIcon} alt="" />
                <img className="h-[12px] m-auto" src={wifiIcon} alt="" />
            </div>
        </div >
    );
}

export default MacToolbar;
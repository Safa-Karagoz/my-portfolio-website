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
            <div>
                <span className="mr-4 text-sm"></span>
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
        </div>
    );
}

export default MacToolbar;
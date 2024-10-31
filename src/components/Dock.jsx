import React, { useState, useEffect } from 'react';
import trashCanIcon from '../assets/mac-tool-bar/trash-can.webp';

const Dock = ({ apps }) => {
    const [visibleApps, setVisibleApps] = useState([]);
    
    useEffect(() => {
        const updateVisibleApps = () => {
            const screenWidth = window.innerWidth;
            let numAppsToShow;
            
            if (screenWidth < 640) {        // sm
                numAppsToShow = 3;
            } else if (screenWidth < 768) { // md
                numAppsToShow = 4;
            } else if (screenWidth < 1024) { // lg
                numAppsToShow = 5;
            } else {                         // xl and above
                numAppsToShow = apps.length;
            }
            
            setVisibleApps(apps.slice(0, numAppsToShow));
        };

        updateVisibleApps();
        window.addEventListener('resize', updateVisibleApps);
        return () => window.removeEventListener('resize', updateVisibleApps);
    }, [apps]);

    return (
        <div className="fixed bottom-[5%] left-1/2 transform -translate-x-1/2 flex items-center px-4 py-2.5 bg-white/20 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center space-x-4">
                {visibleApps.map((app) => (
                    <div 
                        key={app.id} 
                        className="group relative"
                    >
                        <div className="w-10 h-10 transition-transform duration-200 group-hover:scale-110">
                            <img 
                                src={app.iconSrc} 
                                alt={app.name} 
                                className="w-full h-full rounded-[22.37%]"
                            />
                        </div>
                        
                        <div className="z-[104] opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {app.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-0.5 h-10 bg-black/20 mx-2.5 rounded-sm"></div>

            <div className="group relative">
                <div className="w-10 h-10 -translate-y-[3.5px] transition-transform duration-200 group-hover:scale-110">
                    <img 
                        src={trashCanIcon} 
                        alt="Trash" 
                        className="w-full h-full"
                    />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Trash
                </div>
            </div>
        </div>
    );
};

export default Dock;
import React, { useState, useEffect } from 'react';
import trashCanIcon from '../assets/mac-tool-bar/trash-can.webp';
import AppFramework from './Apps/AppFramework';

const Dock = ({ apps }) => {
    const [visibleApps, setVisibleApps] = useState([]);
    const [openApps, setOpenApps] = useState(new Map());
    const [windowCounter, setWindowCounter] = useState(1000);
    
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

    const openApp = (appId) => {
        setWindowCounter(prev => prev + 1);
        setOpenApps(prev => {
            const newMap = new Map(prev);
            newMap.set(appId, windowCounter);
            return newMap;
        });
    };

    const closeApp = (appId) => {
        setOpenApps(prev => {
            const newMap = new Map(prev);
            newMap.delete(appId);
            return newMap;
        });
    };

    const bringToFront = (appId) => {
        setWindowCounter(prev => prev + 1);
        setOpenApps(prev => {
            const newMap = new Map(prev);
            newMap.set(appId, windowCounter);
            return newMap;
        });
    };

    return (
        <>
            <div className="fixed bottom-[5%] left-1/2 transform -translate-x-1/2 flex items-center px-4 py-2.5 bg-white/20 rounded-xl shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                    {visibleApps.map((app) => (
                        <div 
                            key={app.id} 
                            className="group relative"
                            onDoubleClick={() => openApp(app.id)}
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

                            {openApps.has(app.id) && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                            )}
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

            {Array.from(openApps).map(([appId, zIndex]) => {
                const app = apps.find(a => a.id === appId);
                return (
                    <div key={appId} className="fixed" style={{ zIndex }}>
                        <AppFramework
                            app={app}
                            onClose={() => closeApp(appId)}
                            onFocus={() => bringToFront(appId)}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Dock;
import React, { useState } from 'react';
import AppIcon from '../components/AppIcon';
import MacToolbar from '../components/MacToolBar';
import Dock from '../components/Dock';
import AboutMeIcon from "../assets/app-icons/AboutMe-icon.png"
import InteractiveGlobeIcon from "../assets/app-icons/InteractiveGlobe-icon.png"
import NeonNightIcon from "../assets/app-icons/NeonNight-icon.png"
import TeacherWordle from "../assets/app-icons/TeacherWordle-icon.png"
import SeniorManiaLeaderboard from "../assets/app-icons/SeniorManiaLeaderboard-icon.png"
import ReminisceIcon from "../assets/app-icons/Reminisce-icon.png"

let windowCounter = 1000;

const DesktopWindow = () => {
    const [openWindows, setOpenWindows] = useState(new Map());

    const apps = [
        { id: 1, name: 'About Me', iconSrc: AboutMeIcon },
        { id: 2, name: 'Reminisce', iconSrc: ReminisceIcon },
        { id: 3, name: 'Interactive Globe', iconSrc: InteractiveGlobeIcon },
        { id: 4, name: 'Neon Night', iconSrc: NeonNightIcon },
        { id: 5, name: 'Teacher Wordle', iconSrc: TeacherWordle },
        { id: 6, name: 'SeniorMania Leaderboard', iconSrc: SeniorManiaLeaderboard },
    ];

    const bringToFront = (appId) => {
        windowCounter += 1;
        setOpenWindows(prev => {
            const newMap = new Map(prev);
            newMap.set(appId, windowCounter);
            return newMap;
        });
    };

    const openWindow = (appId) => {
        if (!openWindows.has(appId)) {
            windowCounter += 1;
            setOpenWindows(prev => {
                const newMap = new Map(prev);
                newMap.set(appId, windowCounter);
                return newMap;
            });
        } else {
            bringToFront(appId);
        }
    };

    const closeWindow = (appId) => {
        setOpenWindows(prev => {
            const newMap = new Map(prev);
            newMap.delete(appId);
            return newMap;
        });
    };
    
    return (
        <div className="w-screen h-screen bg-[url('./assets/background.jpeg')] bg-center bg-cover bg-no-repeat overflow-hidden">
            <MacToolbar />
            <Dock apps={apps}/>
            <div className="flex flex-col flex-wrap content-start h-[calc(100%-100px)] p-4 gap-1">
                {apps.map(app => (
                    <AppIcon 
                        key={app.id} 
                        app={app}
                        isOpen={openWindows.has(app.id)}
                        zIndex={openWindows.get(app.id) || 1000}
                        onOpen={() => openWindow(app.id)}
                        onClose={() => closeWindow(app.id)}
                        onFocus={() => bringToFront(app.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DesktopWindow;
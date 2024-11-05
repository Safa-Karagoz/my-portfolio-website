import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import AppIcon from '../components/AppIcon';
import MacToolbar from '../components/MacToolBar';
import Dock from '../components/Dock';

// icon imports
import AboutMeIcon from "../assets/app-icons/AboutMe-icon.png"
import InteractiveGlobeIcon from "../assets/app-icons/InteractiveGlobe-icon.png"
import NeonNightIcon from "../assets/app-icons/NeonNight-icon.png"
import TeacherWordle from "../assets/app-icons/TeacherWordle-icon.png"
import SeniorManiaLeaderboard from "../assets/app-icons/SeniorManiaLeaderboard-icon.png"
import ReminisceIcon from "../assets/app-icons/Reminisce-icon.png"
import FriendIcon from "../assets/app-icons/Friend-Analytics-logo.png"

let windowCounter = 1000;

const DesktopWindow = () => {
    const [openWindows, setOpenWindows] = useState(new Map());
    const [isLoading, setIsLoading] = useState(true);

    const apps = [
        { id: 1, name: 'About Me', iconSrc: AboutMeIcon, color: '#f9f9f9' },
        { id: 2, name: 'Reminisce', iconSrc: ReminisceIcon, color: '#1e201e' },
        { id: 3, name: 'Friend.tech Analytics', iconSrc: FriendIcon, color: '#1a1b1e' },
        { id: 4, name: 'Interactive Globe', iconSrc: InteractiveGlobeIcon, color: '#FDFDFA' },
        { id: 5, name: 'Neon Night', iconSrc: NeonNightIcon, color: '#f0f0f0' },
        // { id: 6, name: 'Teacher Wordle', iconSrc: TeacherWordle, color: '#f0f0f0' },
        // { id: 7, name: 'SeniorMania Leaderboard', iconSrc: SeniorManiaLeaderboard, color: '#f0f0f0' },
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
        if (isLoading) return;
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
        <>
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
            <div
                className={`
                    w-screen h-screen 
                    bg-[url('./assets/background.jpeg')] 
                    bg-center bg-cover bg-no-repeat 
                    overflow-hidden
                    transition-all duration-1000 ease-out
                    ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
                    ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}

                `}
            >
                <MacToolbar />
                <Dock apps={apps} />
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
                            isLoading={isLoading}
                        />
                    ))}
                </div>
            </div>
        </>

    );
};

export default DesktopWindow;

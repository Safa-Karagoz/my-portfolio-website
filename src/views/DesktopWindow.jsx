import React, { useState, useEffect } from 'react';
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
    const [viewHeight, setViewHeight] = useState('100vh');
    const [gridStyles, setGridStyles] = useState({
        gridTemplateRows: 'repeat(4, 120px)',
        gridAutoFlow: 'column'
    });

    useEffect(() => {
        const updateViewHeight = () => {
            const vh = window.innerHeight;
            const availableHeight = vh - 116; // Subtract toolbar and dock height
            const rowHeight = 120; // Height of each icon row
            const maxRows = Math.floor(availableHeight / rowHeight);
            
            setViewHeight(`${vh}px`);
            setGridStyles({
                gridTemplateRows: `repeat(${maxRows}, 120px)`,
                gridAutoFlow: 'column'
            });
        };

        window.addEventListener('resize', updateViewHeight);
        updateViewHeight();

        return () => window.removeEventListener('resize', updateViewHeight);
    }, []);

    const apps = [
        { id: 1, name: 'About Me', iconSrc: AboutMeIcon, color: '#f9f9f9' },
        { id: 2, name: 'Reminisce', iconSrc: ReminisceIcon, color: '#1e201e' },
        { id: 3, name: 'Friend.tech Analytics', iconSrc: FriendIcon, color: '#1a1b1e' },
        { id: 4, name: 'Interactive Globe', iconSrc: InteractiveGlobeIcon, color: '#1A1A2E' },
        { id: 5, name: 'Neon Night', iconSrc: NeonNightIcon, color: '#1a1122' },
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
                    w-screen overflow-hidden
                    bg-[url('./assets/background.jpeg')] 
                    bg-center bg-cover bg-no-repeat 
                    transition-all duration-1000 ease-out
                    ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
                    ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}
                `}
                style={{ height: viewHeight }}
            >
                <MacToolbar />
                <div 
                    className="grid gap-1 p-4 justify-start"
                    style={{ 
                        height: `calc(${viewHeight} - 116px)`,
                        gridTemplateColumns: 'repeat(auto-fill, 80px)',
                        ...gridStyles
                    }}
                >
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
                <Dock apps={apps} />
            </div>
        </>
    );
};

export default DesktopWindow;
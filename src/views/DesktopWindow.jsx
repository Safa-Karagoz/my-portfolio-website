import React from 'react';
import AppIcon from '../components/AppIcon';
import MacToolbar from '../components/MacToolBar';
import Dock from '../components/Dock';
import AboutMeIcon from "../assets/app-icons/AboutMe-icon.png"
import SafariIcon from "../assets/app-icons/Safari-icon.png"
import MessagesIcon from "../assets/app-icons/Messages-icon.png"
import InteractiveGlobeIcon from "../assets/app-icons/InteractiveGlobe-icon.png"
import NeonNightIcon from "../assets/app-icons/NeonNight-icon.png"
import TeacherWordle from "../assets/app-icons/TeacherWordle-icon.png"
import SeniorManiaLeaderboard from "../assets/app-icons/SeniorManiaLeaderboard-icon.png"

const DesktopWindow = () => {
    const apps = [
        { id: 1, name: 'About Me', iconSrc: AboutMeIcon },
        { id: 2, name: 'Interactive Globe', iconSrc: InteractiveGlobeIcon },
        { id: 3, name: 'Neon Night', iconSrc: NeonNightIcon },
        { id: 4, name: 'Teacher Wordle', iconSrc: TeacherWordle },
        { id: 5, name: 'SeniorMania Leaderboard', iconSrc: SeniorManiaLeaderboard },
    ];
    
    return (
        <div className="w-screen h-screen bg-[url('./assets/background.jpeg')] bg-center bg-cover bg-no-repeat overflow-hidden">
            <MacToolbar />
            <Dock apps={apps}/>
            <div className="flex flex-col flex-wrap content-start h-[calc(100%-100px)] p-4 gap-1">
                {apps.map(app => <AppIcon key={app.id} app={app} />)}
            </div>
        </div>
    );
}

export default DesktopWindow;
import React from 'react';
import "../styles/DesktopWindow.css";

// components 
import AppIcon from '../components/AppIcon';
import MacToolbar from '../components/MacToolBar';
import Dock from '../components/Dock';

// icons
import AboutMeIcon from "../assets/app-icons/AboutMe-icon.png"
import SafariIcon from "../assets/app-icons/Safari-icon.png"
import MessagesIcon from "../assets/app-icons/Messages-icon.png"


const DesktopWindow = ({ children }) => {
    const apps = [
        { id: 1, name: 'About Me', iconSrc: AboutMeIcon },
        { id: 2, name: 'Safari', iconSrc: SafariIcon },
        { id: 3, name: 'Messages', iconSrc: MessagesIcon }
    ];
    
    return (
        <div className="desktop-window">
            
            <MacToolbar />
            <Dock apps={apps}/>
            {apps.map(app => <AppIcon key={app.id} app={app} />)}


        </div>
    );
}

export default DesktopWindow;

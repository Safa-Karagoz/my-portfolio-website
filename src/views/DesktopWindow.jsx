import React from 'react';
import "../styles/DesktopWindow.css";

// components 
import AppIcon from '../components/AppIcon';
import MacToolbar from '../components/MacToolBar';
import Dock from '../components/Dock';

// icons
import SafariIcon from "../assets/app-icons/Safari-icon.png"
import MessagesIcon from "../assets/app-icons/Messages-icon.png"


const DesktopWindow = ({ children }) => {
    const apps = [
        { id: 1, name: 'Safari', iconSrc: SafariIcon },
        { id: 2, name: 'Messages', iconSrc: MessagesIcon }
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

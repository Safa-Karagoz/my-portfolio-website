import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';
import InteractiveGlobe from './InteractiveGlobe/InteractiveGlobe';
import Reminisce from './Reminisce/Reminisce';
import FriendAnalytics from './FriendAnalytics/FriendAnalytics';
import NeonNight from './NeonNight';

let windowCounter = 1000;

const AppFramework = ({ onClose, app }) => {
    const [zIndex, setZIndex] = useState(() => windowCounter++);
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: '80vw',
        height: 'auto',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)'
    });

    useEffect(() => {
        const updateDimensions = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            if (mobile) {
                const availableHeight = window.innerHeight - 24; // Subtract toolbar height
                setDimensions({
                    width: '100%',
                    height: `${availableHeight}px`,
                    top: '24px', 
                    left: '0',
                    transform: 'none'
                });
            } else {
                setDimensions({
                    width: '80vw',
                    height: 'auto',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const bringToFront = () => {
        setZIndex(windowCounter++);
    };

    const renderApp = () => {
        switch(app.name) {
            case "About Me":
                return <AboutMe />;
            case "Interactive Globe":
                return <InteractiveGlobe />;
            case "Reminisce":
                return <Reminisce />;
            case "Friend.tech Analytics":
                return <FriendAnalytics />;
            case "Neon Night":
                return <NeonNight />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none">
            <Draggable
                handle=".app-toolbar"
                bounds="parent"
                onStart={bringToFront}
                disabled={isMobile}
            >
                <div
                    className={`
                        pointer-events-auto 
                        bg-inherit 
                        rounded-lg 
                        shadow-lg 
                        animate-[openApp_0.2s_ease-out] 
                        absolute
                        overflow-hidden
                        ${isMobile ? 'w-full' : ''}
                    `}
                    style={{
                        zIndex,
                        ...dimensions
                    }}
                    onClick={bringToFront}
                >
                    <div className={`
                        app-toolbar 
                        ${isMobile ? 'cursor-default' : 'cursor-move'}
                        sticky top-0 z-50
                    `}>
                        <AppToolBar onClose={onClose} color={app.color}/>
                    </div>
                    <div 
                        onClick={e => e.stopPropagation()}
                        className={`
                            ${isMobile ? 'h-full overflow-auto' : ''}
                        `}
                    >
                        {renderApp()}
                    </div>
                </div>
            </Draggable>
        </div>
    );
};

export default AppFramework;
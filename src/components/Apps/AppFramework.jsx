import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';
import InteractiveGlobe from './InteractiveGlobe/InteractiveGlobe';
import Reminisce from './Reminisce/Reminisce';
import FriendAnalytics from './FriendAnalytics/FriendAnalytics';

let windowCounter = 1000;

const AppFramework = ({ onClose, app }) => {
    const [zIndex, setZIndex] = useState(() => windowCounter++);

    const bringToFront = () => {
        setZIndex(windowCounter++);
    };

    useEffect(() => {
        setZIndex(windowCounter++);
    }, []);

    const renderApp = () => {
        if (app.name === "About Me") {
            return (<AboutMe />)
        }
        if (app.name === "Interactive Globe") {
            return (<InteractiveGlobe />)
        }
        if (app.name === "Reminisce") {
            return (<Reminisce />)
        }
        if (app.name === "Friend.tech Analytics") {
            return (<FriendAnalytics />)
        }
        return null;
    }

    return (
        <div className="fixed inset-0 pointer-events-none">
            <Draggable
                handle=".app-toolbar"
                bounds="parent"
                onStart={bringToFront}
            >
                <div
                    className="pointer-events-auto bg-inherit rounded-lg shadow-lg animate-[openApp_0.2s_ease-out] absolute top-[10%] left-[20%] -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex }}
                    onClick={bringToFront}
                >
                    <div className="app-toolbar cursor-move">
                        <AppToolBar onClose={onClose} color={app.color}/>
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                        {renderApp()}
                    </div>
                </div>
            </Draggable>
        </div>
    );
}

export default AppFramework;
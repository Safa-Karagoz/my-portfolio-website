import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';
import InteractiveGlobe from './InteractiveGlobe';
import Reminisce from './Reminisce';

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
        return null;
    }

    return (
        <div className="fixed inset-0 mt-6 flex items-center justify-center pointer-events-none">
            <Draggable
                handle=".app-toolbar"
                bounds="parent"
                onStart={bringToFront}
            >
                <div
                    className="pointer-events-auto bg-white rounded-lg shadow-lg animate-[openApp_0.2s_ease-out] absolute"
                    style={{ zIndex }}
                >
                    <div className="app-toolbar">
                        <AppToolBar onClose={onClose} />
                    </div>
                    {renderApp()}
                </div>
            </Draggable>
        </div>
    );
}

export default AppFramework
import React from 'react';
import Draggable from 'react-draggable';
import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';
import InteractiveGlobe from './InteractiveGlobe';
import Reminisce from './Reminisce';

const AppFramework = ({ app, zIndex, onClose, onFocus }) => {
    const renderApp = () => {
        switch(app.name) {
            case "About Me":
                return <AboutMe />;
            case "Interactive Globe":
                return <InteractiveGlobe />;
            case "Reminisce":
                return <Reminisce />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <Draggable handle='.app-toolbar'>
                <div
                    className="pointer-events-auto bg-white rounded-lg shadow-lg animate-[openApp_0.2s_ease-out]"
                    style={{ zIndex }}
                    onMouseDown={onFocus}
                >
                    <div className='app-toolbar'>
                        <AppToolBar onClose={onClose} />
                    </div>
                    {renderApp()}
                </div>
            </Draggable>
        </div>
    );
};

export default AppFramework;
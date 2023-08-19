import React, { useState } from 'react';
import '../styles/AppIcon.css';
import AboutMe from './Apps/AboutMe';

const AppIcon = ({ app }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <div className="icon"  onDoubleClick={() => setShowPopup(true)}>
                <img src={app.iconSrc} alt={app.name} title={app.name} />
                <p>{app.name}</p>
            </div>

            {showPopup && (
                <AboutMe setShowPopup={setShowPopup} app={app}/>
            )}
        </div>
    );
}

export default AppIcon;

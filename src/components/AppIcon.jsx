import React, { useState } from 'react';
import '../styles/AppIcon.css';
import AppFramework from './Apps/AppFramework';

const AppIcon = ({ app }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <div className="icon"  onDoubleClick={() => setShowPopup(true)}>
                <img src={app.iconSrc} alt={app.name} title={app.name} />
                <p>{app.name}</p>
            </div>

            {showPopup && (
                <AppFramework setShowPopup={setShowPopup} app={app}/>
            )}
        </div>
    );
}

export default AppIcon;

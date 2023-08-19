import React from 'react'
import '../../styles/AppIcon.css';

const AboutMe = ({setShowPopup, app}) => {
    return (
        <div className="popup">
        <div className="macos-titlebar">
            <div className="window-buttons">
                <button className="close-btn" onClick={() => setShowPopup(false)}></button>
                <button className="minimize-btn"></button>
                <button className="maximize-btn"></button>
            </div>
            <span>{app.name}</span>
        </div>
        <div className="popup-content">
            <p>{app.description}</p>
        </div>
    </div>
    )
}

export default AboutMe
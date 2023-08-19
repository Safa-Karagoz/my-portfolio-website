import React from 'react';
import '../styles/Dock.css';

const Dock = ({ apps }) => {
    console.log(apps)
    return (
        <div className="dock">
            {apps.map(app => (
                <div key={app.id} className="app-icon">
                    <img src={app.iconSrc} alt={app.name} title={app.name} />
                </div>
            ))}
        </div>
    );
}

export default Dock;

import React from 'react'
import '../../styles/Apps/AppToolBar.css';

const AppToolBar = ({setShowPopup}) => {
  return (
    <div className="popup">
        <div className="macos-titlebar">
            <div className="window-buttons">
                <button className="close-btn" onClick={() => setShowPopup(false)}></button>
                <button className="minimize-btn"></button>
                <button className="maximize-btn"></button>
            </div>
        </div>
       
    </div>
  )
}

export default AppToolBar
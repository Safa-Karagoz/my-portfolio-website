import React from 'react'
import '../../styles/Apps/AppFramework.css';
import Draggable from 'react-draggable';

import AppToolBar from './AppToolBar';


const AppFramework = ({ setShowPopup, app }) => {
   return (
      <Draggable handle='.app-toolbar'>
         <div className='app-container'>
            <div className='app-toolbar'>
               <AppToolBar setShowPopup={setShowPopup} />
            </div>
            <div className="app-content">
               <p>wpwpw</p>
            </div>
         </div>
      </Draggable>

   )
}

export default AppFramework
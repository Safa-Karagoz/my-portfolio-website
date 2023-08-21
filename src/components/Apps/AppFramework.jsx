import React from 'react'
import '../../styles/Apps/AppFramework.css';
import Draggable from 'react-draggable';

import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';




const AppFramework = ({ setShowPopup, app }) => {

   const renderApp = () => {
      if (app.name === "About Me"){ 
         return (<AboutMe />)
      }
      return null; 
   }

   return (
      <Draggable handle='.app-toolbar'>
         <div className='app-container'>
            <div className='app-toolbar'>
               <AppToolBar setShowPopup={setShowPopup} />
            </div>
               {renderApp()}
         </div>
      </Draggable>

   )
}

export default AppFramework
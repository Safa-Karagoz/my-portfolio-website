import React from 'react'
import Draggable from 'react-draggable';

import AppToolBar from './AppToolBar';
import AboutMe from './AboutMe';
import InteractiveGlobe from './InteractiveGlobe';


const AppFramework = ({ setShowPopup, app }) => {
   const renderApp = () => {
       if (app.name === "About Me") return <AboutMe />;
       if (app.name === "Interactive Globe") return <InteractiveGlobe />;
       return null;
   }

   return (
       <Draggable handle=".app-toolbar">
           <div className="fixed z-[9999] rounded-lg shadow-lg transform-gpu origin-center animate-[openApp_0.2s_ease-out]">
               <div className="app-toolbar">
                   <AppToolBar setShowPopup={setShowPopup} />
               </div>
               {renderApp()}
           </div>
       </Draggable>
   );
}

export default AppFramework
import React, {useState, useEffect} from 'react';
import "../styles/MacToolBar.css";

const MacToolbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 30000);  

        return () => {
            clearInterval(intervalId); 
        };
    }, []);

    const formattedDate = currentDateTime.toLocaleString('default', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' ,
    });

    const formattedTime = currentDateTime.toLocaleString('default', {
        hour: '2-digit', 
        minute: '2-digit'
    });


    return (
        <div className="mac-toolbar">
            <div className="left-items">
                <span className="apple-logo"></span> 
                <span>Finder</span>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
            </div>
            <div className="right-items">
            <span>{formattedDate} {formattedTime}</span>
            </div>
        </div>
    );
}

export default MacToolbar;

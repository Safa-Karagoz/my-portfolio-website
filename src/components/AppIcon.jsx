import React, { useRef } from 'react';
import AppFramework from './Apps/AppFramework';

const AppIcon = ({ app, isOpen, zIndex, onOpen, onClose, onFocus, isLoading }) => {
    const iconRef = useRef(null);

    const handleDoubleClick = () => {
        onOpen();
    };

    return (
        <>
            <div
                ref={iconRef}
                className={`
                    flex flex-col items-center justify-start
                    w-full h-full p-2
                    cursor-pointer
                    opacity-0
                `}
                style={{
                    animation: isLoading ? 'none' : `fadeInUp 1000ms ease-out ${300 + app.id * 100}ms forwards`
                }}
                onDoubleClick={handleDoubleClick}
            >
                <img
                    src={app.iconSrc}
                    alt={app.name}
                    title={app.name}
                    className="w-11 h-11 mb-2 rounded-[22.37%]"
                />
                <p className="m-0 text-[11px] sm:text-sm text-white font-semibold text-center break-words line-clamp-2 w-13">
                    {app.name}
                </p>
            </div>
            {isOpen && (
                <div className="fixed" style={{ zIndex: zIndex }}>
                    <AppFramework
                        app={app}
                        zIndex={zIndex}
                        onClose={onClose}
                        onFocus={onFocus}
                    />
                </div>
            )}
        </>
    );
};

export default AppIcon;
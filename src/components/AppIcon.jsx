import React from 'react';
import AppFramework from './Apps/AppFramework';

const AppIcon = ({ app, isOpen, zIndex, onOpen, onClose, onFocus, isLoading }) => {
    const handleDoubleClick = () => {
        onOpen();
    };

    return (
        <>
            <div
                className={`
                    flex flex-col p-3 cursor-pointer w-[70px] h-[110px] 
                    items-center text-center mb-auto box-border mr-3
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
                    className="block w-[40px] h-[40px] mb-2 rounded-[22.37%]"
                />
                <p className="m-0 text-sm w-20 text-white font-semibold break-words line-clamp-2">
                    {app.name}
                </p>
            </div>
            {isOpen && (
                <div className="fixed inset-0" style={{ zIndex: zIndex }}>
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
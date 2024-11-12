import React, { useState } from 'react';
/* asset imports */
import PersonalPic from "../../assets/about-me/PersonalPic.png"
import githubIcon from "../../assets/about-me/github-icon.png"
import instagramIcon from "../../assets/about-me/instagram-icon.png"
import emailIcon from "../../assets/about-me/email-icon.png"
import linkedinIcon from "../../assets/about-me/linkedin-icon.png"

const Notification = ({ message, isVisible, onHide }) => {
    if (!isVisible) return null;

    return (
        <div 
            className={`
                fixed top-4 right-4 
                bg-black/90 text-white 
                px-4 py-2 rounded-lg 
                shadow-lg
                animate-[fadeIn_200ms_ease-out]
                transition-all
                flex items-center gap-2
            `}
        >
            <span>✓</span>
            <span>{message}</span>
        </div>
    );
};

const SocialButton = ({ href, icon, alt }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
        >
            <img src={icon} alt={alt} title={alt} className="w-7 h-7"/>
        </a>
    );
}

const AboutMe = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        const email = 'safakaragoz59@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        });
    };

    return (
        <div className="p-8 flex justify-center items-center shadow-lg font-sans rounded-b-lg bg-gradient-to-br from-[#f9f9f9] to-[#dddddd]">
            <Notification 
                message="Email copied!" 
                isVisible={showNotification} 
                onHide={() => setShowNotification(false)}
            />

            <div className="flex flex-col items-center text-center space-y-6">
                <div className="space-y-6 animate-[fadeInUp_1000ms_ease-out]">
                    <img 
                        src={PersonalPic} 
                        alt="Safa Karagoz" 
                        className="w-48 h-48 object-cover shadow-lg rounded-lg mx-auto"
                    />
                    <div className="space-y-2">
                        <h1 className="font-prata text-3xl text-[#e7290d]">
                            Hi, I'm Safa.
                        </h1>
                        <p className="font-lato text-lg">
                            I like to code cool shit.
                        </p>
                        <p className="font-lato text-sm text-gray-600">
                            Bergen County Academies '24 & Rutgers '28
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 pt-2 animate-[fadeInUp_1000ms_ease-out_200ms]">
                    <SocialButton href="https://github.com/Safa-Karagoz" icon={githubIcon} alt="GitHub" />
                    <SocialButton href="https://www.instagram.com/Safa_Karagoz06/" icon={instagramIcon} alt="Instagram" />
                    <button 
                        onClick={handleEmailClick}
                        className="transition-transform hover:scale-110 relative group"
                        title="Click to copy email"
                    >
                        <img src={emailIcon} alt="Copy Email" className="w-7 h-7"/>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Click to copy email
                        </span>
                    </button>
                    <SocialButton href="https://www.linkedin.com/in/safa-karagoz" icon={linkedinIcon} alt="LinkedIn" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
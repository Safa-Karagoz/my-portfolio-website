import React from 'react';
import '../../styles/Apps/AboutMe.css';

/* asset imports */
import PersonalPic from "../../assets/about-me/PersonalPic.png"
import githubIcon from "../../assets/about-me/github-icon.png"
import instagramIcon from "../../assets/about-me/instagram-icon.png"
import emailIcon from "../../assets/about-me/email-icon.png"
import linkedinIcon from "../../assets/about-me/linkedin-icon.png"

const AboutMe = () => {
    return (
        <div className="about-container">
            <div className="content-wrapper">
                <div className="text-section">
                    <h4>ABOUT ME</h4>
                    <h1>Safa Karagoz</h1>
                    <p>Hello! I'm Safa Karagoz, currently a senior at Bergen County Academies. Over the years,
                       I've developed a strong passion for programming and digital innovation.

                       This website is a reflection of my journey. I wanted to break away from traditional portfolio designs 
                       and craft something more interactive and engaging.
                       Here, each app icon you see represents a project I've worked on. Double-clicking any of them will open a 
                       window that provides a deeper insight into the project. It's my way of blending creativity with technology, 
                       offering a unique experience while showcasing my work. Enjoy!
                    </p>
                    <div className="social-buttons">
                        <a href="https://github.com/Safa-Karagoz" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" title="GitHub" />
                        </a>
                        <a href="https://www.instagram.com/Safa_Karagoz06/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" title="Instagram" />
                        </a>
                        <a href="mailto:safakaragoz59@gmail.com">
                            <img src={emailIcon} alt="Email" title="Email" />
                        </a>
                        <a href="https://www.linkedin.com/in/safa-karagoz06" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="Email" title="Email" />
                        </a>
                    </div>
                </div>
                <div className="image-section">
                    <img src={PersonalPic} alt="Safa Karagoz" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

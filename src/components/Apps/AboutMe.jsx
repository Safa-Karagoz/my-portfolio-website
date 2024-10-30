import React from 'react';

/* asset imports */
import PersonalPic from "../../assets/about-me/PersonalPic.png"
import githubIcon from "../../assets/about-me/github-icon.png"
import instagramIcon from "../../assets/about-me/instagram-icon.png"
import emailIcon from "../../assets/about-me/email-icon.png"
import linkedinIcon from "../../assets/about-me/linkedin-icon.png"

const AboutMe = () => {
    return (
        <div className="p-5 max-w-[600px] flex justify-center items-center shadow-lg font-sans rounded-b-lg bg-gradient-to-br from-[#f9f9f9] to-[#dddddd]">
            <div className="flex items-center">
                <div className="flex-1 pr-5">
                    <h4 className="font-prata font-light mb-1">ABOUT ME</h4>
                    <h1 className="font-prata text-[#e7290d] mt-0">Safa Karagoz</h1>
                    <p className="font-lato mt-0 leading-[150%]">
                        Hello! I'm Safa Karagoz, currently a senior at Bergen County Academies. Over the years,
                        I've developed a strong passion for programming and digital innovation.

                        This website is a reflection of my journey. I wanted to break away from traditional portfolio designs 
                        and craft something more interactive and engaging.
                        Here, each app icon you see represents a project I've worked on. Double-clicking any of them will open a 
                        window that provides a deeper insight into the project. It's my way of blending creativity with technology, 
                        offering a unique experience while showcasing my work. Enjoy!
                    </p>
                    <div className="mt-4 flex gap-2.5">
                        <SocialButton href="https://github.com/Safa-Karagoz" icon={githubIcon} alt="GitHub" />
                        <SocialButton href="https://www.instagram.com/Safa_Karagoz06/" icon={instagramIcon} alt="Instagram" />
                        <SocialButton href="mailto:safakaragoz59@gmail.com" icon={emailIcon} alt="Email" />
                        <SocialButton href="https://www.linkedin.com/in/safa-karagoz06" icon={linkedinIcon} alt="LinkedIn" />
                    </div>
                </div>
                <div>
                    <img src={PersonalPic} alt="Safa Karagoz" className="max-w-[200px] shadow-lg rounded-lg" />
                </div>
            </div>
        </div>
    );
}

const SocialButton = ({ href, icon, alt }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className=''>
            <img src={icon} alt={alt} title={alt} className='w-7 h-7'/>
        </a>
    );
}


export default AboutMe;

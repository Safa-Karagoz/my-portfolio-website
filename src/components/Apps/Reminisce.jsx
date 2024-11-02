import React, { useEffect, useState, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import LandingModel from './LandingModel'
import teamPhoto from "../../assets/reminisce/team-photo.jpg"
import { ChevronDown, Brain, Users, MessageSquare, Code, Trophy, Github, Youtube } from 'lucide-react'

const ScrollIndicator = () => {
   const [opacity, setOpacity] = useState(1);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setOpacity(prev => Math.sin(Date.now() / 1000) * 0.5 + 0.5);
      }, 16);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ opacity }}>
         <div className="text-[#ede0cc] text-sm mb-0">Scroll</div>
         <ChevronDown className="text-[#ede0cc]" />
      </div>
   );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
   <div className="bg-[#1e201e]/50 p-6 rounded-lg backdrop-blur-sm border border-[#d48311]/20 hover:border-[#d48311]/40 transition-all">
      <Icon className="w-8 h-8 text-[#d48311] mb-4" />
      <h3 className="text-[#ede0cc] text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#ede0cc]/80">{description}</p>
   </div>
);

const Section = ({ children, className = "" }) => {
   const [isVisible, setVisible] = useState(false);
   const sectionRef = useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setVisible(entry.isIntersecting);
         },
         {
            threshold: 0.1,
            rootMargin: '-50px'
         }
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);

   return (
      <div
         ref={sectionRef}
         className={`min-h-full flex items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
            } ${className}`}
      >
         {children}
      </div>
   );
};

const Reminisce = () => {
   const containerRef = useRef();
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         if (containerRef.current) {
            setScrollY(containerRef.current.scrollTop);
         }
      };

      const container = containerRef.current;
      if (container) {
         container.addEventListener('scroll', handleScroll);
         return () => container.removeEventListener('scroll', handleScroll);
      }
   }, []);

   return (
      <div
         ref={containerRef}
         className="w-[60vw] h-[70vh] bg-gradient-to-br from-[#1e201e] via-[#1e201e]/95 to-[#3d3e38]/90 overflow-y-auto snap-y snap-mandatory rounded-b-lg"
      >
         {/* First Section */}
         <Section className="snap-start p-8">
            <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               <div className="space-y-6">
                  <div>
                     <h1 className="text-5xl font-bold">
                        <span className="bg-gradient-to-r from-[#697565] to-[#d48311] bg-clip-text text-transparent">
                           Reminisce
                        </span>
                     </h1>
                     <p className="text-lg text-[#ede0cc] font-semibold mt-2">
                        A companion for your loved one with dementia
                     </p>
                  </div>
                  <a
                     href="https://reminisce-two.vercel.app"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block text-[#ede0cc] border border-[#d48311] hover:bg-[#d48311] transition-all p-2 px-4 rounded-md"
                  >
                     <span className="font-medium">Check it out</span>
                  </a>
               </div>

               <div className="space-y-6 items-center justify-center">
                  <div className="flex justify-center items-center">
                     <LandingModel />
                  </div>
                  <div className="text-2xl text-[#ede0cc] text-center font-semibold">
                     <Typewriter
                        options={{
                           strings: ['How are you?', 'Your AI Companion', 'Always Here to Help'],
                           autoStart: true,
                           loop: true,
                           delay: 75,
                           deleteSpeed: 50,
                        }}
                     />
                  </div>
               </div>
            </div>
         </Section>

         {/* Mission Section */}
         <Section className="snap-start p-8">
            <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-3xl font-bold text-[#d48311] mb-6">Our Mission</h2>
               <p className="text-[#ede0cc] text-lg leading-relaxed">
                  Our project aims to support individuals suffering from dementia predominantly through active recall and "companionship."
                  We were inspired by the growing challenge of dementia and the devastation it causes to both patients and families.
               </p>
            </div>
         </Section>

         {/* Features Section */}
         <Section className="snap-start p-8">
            <div className="max-w-4xl mx-auto w-full">
               <h2 className="text-3xl font-bold text-[#d48311] mb-8 text-center">Key Features</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FeatureCard
                     icon={Brain}
                     title="Active Recall"
                     description="Personalized cognitive exercises and memory stimulation"
                  />
                  <FeatureCard
                     icon={Users}
                     title="AI Companionship"
                     description="Voice-cloned conversations using ElevenLabs"
                  />
                  <FeatureCard
                     icon={MessageSquare}
                     title="Natural Interaction"
                     description="Context-aware AI maintaining meaningful dialogues"
                  />
                  <FeatureCard
                     icon={Code}
                     title="Advanced Technology"
                     description="Leveraging cutting-edge AI and web technologies"
                  />
               </div>
            </div>
         </Section>

         {/* HackRU Section */}
         <Section className="snap-start p-8">
            <div className="max-w-4xl mx-auto w-full text-center">
               <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#d48311] mb-2">
                     Built for HackRU 2024
                  </h2>
                  <h3 className="text-lg text-[#ede0cc]">
                     Placed Second in NeuroScience Track
                  </h3>
               </div>

               <div className="flex gap-4 justify-center mb-8">
                  <a
                     href="https://github.com/yusufsallam64/reminisce"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-[#1e201e] text-[#ede0cc] px-4 py-2 rounded-lg font-semibold hover:bg-[#2d2f2d] transition-all border border-[#d48311]/20 group"
                  >
                     <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                     View on GitHub
                  </a>
                  <a
                     href="https://devpost.com/software/reminisce-er4lyh"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-[#d48311] text-[#1e201e] px-4 py-2 rounded-lg font-semibold hover:bg-[#d48311]/90 transition-all"
                  >
                     <Trophy className="w-5 h-5" />
                     View on Devpost
                  </a>
                  <a
                     href="https://www.youtube.com/watch?v=x8P4OGh6Dks"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-[#1e201e] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2d2f2d] transition-all border border-[#d48311]/20"
                  >
                     <Youtube className="w-5 h-5" />
                     Watch Demo
                  </a>
               </div>

               <div className="flex flex-col items-center">
                  <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg border-2 border-[#d48311]/20">
                     <img
                        src={teamPhoto}
                        alt="Team Photo"
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <p className="text-[#ede0cc]">
                     Built together with {" "}
                     <a
                        href="https://github.com/yusufsallam64"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d48311] hover:text-[#b36f0e] transition-colors underline"
                     >
                        Yusuf Sallam
                     </a>
                  </p>
               </div>
            </div>
         </Section>
      </div>
   );
};

export default Reminisce
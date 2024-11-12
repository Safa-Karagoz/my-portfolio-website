import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import background from "../../assets/neon-night/background.png"
import reborn from "../../assets/neon-night/REBORN.png"
import neonNight from "../../assets/neon-night/NEON NIGHT.png"
import start from "../../assets/neon-night/START.png"

//icons
import icon0 from "../../assets/neon-night/c0_icon.png"
import icon1 from "../../assets/neon-night/c1_icon.png"
import icon2 from "../../assets/neon-night/c2_icon.png"
import icon3 from "../../assets/neon-night/c3_icon.png"
//sprites
import sprite2 from "../../assets/neon-night/c2_sprite.png"
import sprite3 from "../../assets/neon-night/c3_sprite.png"



const NeonNight = () => {
   const [isStarted, setIsStarted] = useState(false);
   const aboutSectionRef = useRef(null);

   const handleStart = () => {
      setIsStarted(true);
      aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   const FeatureCard = ({ children }) => (
      <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-3 hover:border-purple-500/40 transition-colors">
         <p className="text-gray-300">{children}</p>
      </div>
   );

   const CharacterSelect = ({ side, characterName }) => (
      <div className={`flex flex-col items-center ${side === 'left' ? 'pr-2 md:pr-4' : 'pl-2 md:pl-4'}`}>
         <div className="w-full text-center mb-2">
            <h3 className={`
               text-lg md:text-2xl font-bold tracking-wider
               ${side === 'left' ? 'text-cyan-400' : 'text-fuchsia-400'}
               animate-pulse drop-shadow-lg
               [text-shadow:0_0_10px_${side === 'left' ? '#22d3ee' : '#e879f9'}]
            `}>
               {characterName}
            </h3>
         </div>

         {/* Character Display */}
         <div className={`
            relative w-32 md:w-48 h-48 md:h-72 
            flex items-center justify-center 
            mb-4
            before:content-[''] 
            before:absolute 
            before:inset-0 
            before:border-2 
            ${side === 'left'
               ? 'before:border-cyan-500/50 before:shadow-[0_0_15px_rgba(34,211,238,0.3)]'
               : 'before:border-fuchsia-500/50 before:shadow-[0_0_15px_rgba(232,121,249,0.3)]'
            }
            before:rounded-lg
            after:content-['']
            after:absolute
            after:inset-[-2px]
            after:bg-gradient-to-b
            ${side === 'left'
               ? 'after:from-cyan-500/20 after:to-transparent'
               : 'after:from-fuchsia-500/20 after:to-transparent'
            }
            after:rounded-lg
            after:-z-10
         `}>
            <div className="relative w-full h-full flex items-center justify-center">
               <img
                  src={side === 'left' ? sprite2 : sprite3}
                  alt="Character"
                  className="h-full w-auto object-contain relative z-10"
               />

               <div className={`
                  absolute inset-0 
                  bg-gradient-to-b 
                  ${side === 'left'
                     ? 'from-cyan-500/5 to-transparent'
                     : 'from-fuchsia-500/5 to-transparent'
                  }
                  animate-pulse
               `} />
            </div>
         </div>

         {/* Characters Icons */}
         <div className="flex gap-1 md:gap-2">
            {[icon0, icon1, icon2, icon3].map((icon, index) => (
               <div
                  key={index}
                  className={`
                     relative group
                     transition-all duration-300
                     transform hover:scale-110
                  `}
               >
                  <img
                     src={icon}
                     alt={`Icon ${index}`}
                     className={`
                        w-8 h-8 md:w-10 md:h-10 object-cover 
                        rounded-lg 
                        border 
                        ${side === 'left'
                           ? 'border-cyan-500/30 hover:border-cyan-400'
                           : 'border-fuchsia-500/30 hover:border-fuchsia-400'
                        }
                        transition-all
                        cursor-pointer
                        ${side === 'left'
                           ? 'hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                           : 'hover:shadow-[0_0_10px_rgba(232,121,249,0.5)]'
                        }
                     `}
                  />

                  <div className={`
                     absolute inset-0 
                     rounded-lg 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity
                     ${side === 'left'
                        ? 'bg-cyan-500/10'
                        : 'bg-fuchsia-500/10'
                     }
                  `} />
               </div>
            ))}
         </div>
      </div>
   );

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
            <div className="text-violet-400 text-sm mb-0">Scroll</div>
            <ChevronDown className="text-violet-400" />
         </div>
      );
   };


   return (
      <div className="h-[600px] overflow-y-auto snap-y snap-mandatory snap-always">
         {/* Hero Section */}
         <div className="h-full w-full snap-start relative overflow-hidden">
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{
                  backgroundImage: `url(${background})`,
                  backgroundBlendMode: 'overlay'
               }}
            />

            <div className="relative h-full flex flex-col items-center justify-center gap-12 select-none">
               <div className="space-y-3 text-center">
                  <div>
                     <img
                        src={neonNight}
                        alt="Neon Night"
                        className="w-96 "
                     />
                  </div>
                  <div>
                     <img
                        src={reborn}
                        alt="Reborn"
                        className="w-48 mx-auto "
                     />
                  </div>
               </div>

               <button
                  onClick={handleStart}
                  className=" select-none"
               >
                  <img
                     src={start}
                     alt="Start"
                     className="w-32 transition-all duration-300 hover:scale-110 hover:brightness-125
                         animate-[bounce_2s_ease-in-out_infinite] select-none"
                  />
               </button>
            </div>
         </div>

         {/* About Section */}
         <div
            ref={aboutSectionRef}
            className="h-full w-full snap-start bg-[#1a1122]/95 overflow-y-auto"
         >
            <div className="p-8 min-h-full flex items-center">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600 animate-[fadeInUp_1000ms_ease-out]">
                     Neon Night Reborn
                  </h2>

                  <div className="space-y-8">
                     <section className="">
                        <h3 className="text-2xl font-bold mb-4 text-violet-400">Project Overview</h3>
                        <p className="text-gray-300 leading-relaxed mx-auto max-w-2xl">
                           Neon Night is a Street Fighter-inspired 2D fighting game with a unique twist -
                           characters are unlocked through NFT ownership. Players can collect, trade, and battle
                           with their favorite fighters, each represented by a unique NFT on the blockchain.
                        </p>
                     </section>

                     <section className="animate-[fadeInUp_1000ms_ease-out_400ms]">
                        <h3 className="text-2xl font-bold mb-4 text-violet-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                           {[
                              'Unity', 'C#', 'Solidity', 'Ethereum',
                              'Web3.js'
                           ].map((tech) => (
                              <span
                                 key={tech}
                                 className="px-6 py-2.5 bg-purple-900/30 rounded-full text-sm text-purple-300 
                        border border-purple-500/20 hover:border-purple-500/40 transition-all
                        hover:transform hover:scale-105"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </section>

                     <section className="animate-[fadeInUp_1000ms_ease-out_600ms]">
                        <h3 className="text-2xl font-bold mb-4 text-violet-400">Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                           <FeatureCard>
                              NFT-based character unlocking system
                           </FeatureCard>
                           <FeatureCard>
                              Fluid combat mechanics with combos and special moves
                           </FeatureCard>
                           <FeatureCard>
                              Blockchain integration for character ownership
                           </FeatureCard>
                        </div>
                     </section>

                     <section className="animate-[fadeInUp_1000ms_ease-out_800ms] border-t border-purple-500/20 pt-6">
                        <div className="flex flex-col items-center gap-4">
                           <p className="text-gray-300">
                              Built in collaboration with:{' '}
                              <a
                                 href="https://github.com/artavasdes"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-purple-400 hover:text-purple-300 transition-colors"
                              >
                                 Vartan
                              </a>
                              {' '}&{' '}
                              <a
                                 href="https://github.com/Twedo"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-purple-400 hover:text-purple-300 transition-colors"
                              >
                                 Tyler
                              </a>
                           </p>
                        </div>
                     </section>

                     <div className="absolute bottom-0 right-0 mb-4 mr-8">
                        <ScrollIndicator />
                     </div>

                  </div>
               </div>
            </div>
         </div>


         {/* Character Selection */}
         <div className="h-full w-full snap-start bg-[#1a1122]/95 p-6">
            <div className="max-w-5xl mx-auto">
               <div className="flex justify-center items-center mb-8 animate-[fadeInUp_1000ms_ease-out]">
                  <CharacterSelect side="left" characterName="elmo" />
                  <div className="flex items-center px-8">
                     <div className={`
                  relative text-4xl font-bold
                  bg-gradient-to-r from-cyan-400 to-fuchsia-400
                  bg-clip-text text-transparent
                  animate-pulse
                  before:content-['VS']
                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-r
                  before:from-cyan-400/50
                  before:to-fuchsia-400/50
                  before:blur-lg
                  before:-z-10
               `}>
                        VS
                     </div>
                  </div>
                  <CharacterSelect side="right" characterName="BROLY" />
               </div>

               {/* Blockchain Section */}
               <div className="max-w-3xl mx-auto text-center mt-12 ">
                  <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                     Blockchain Integration
                  </h3>
                  <p className="text-gray-300 mb-6">
                     Each character in Neon Night exists as a unique NFT on the Ethereum blockchain,
                     providing true ownership and tradability for players.
                  </p>
               </div>
            </div>
         </div>
      </div>

   );
};

export default NeonNight;
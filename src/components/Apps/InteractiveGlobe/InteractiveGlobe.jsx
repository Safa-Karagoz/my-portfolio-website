import React, { useState, useRef } from 'react';
import GlobeRender from './GlobeRender';
import { Rabbit, Heart, Users, Globe2 } from 'lucide-react';

const InteractiveGlobe = () => {
    const [showGlobe, setShowGlobe] = useState(false);
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: '100%', height: '600px' });

    const handleShowGlobe = () => {
        if (containerRef.current) {
            const { offsetWidth } = containerRef.current;
            setDimensions({
                width: `${offsetWidth}px`,
                height: '600px'
            });
        }
        setShowGlobe(true);
    };

    const features = [
        {
            icon: Globe2,
            title: "Interactive Visualization",
            description: "Real-time 3D globe with live country exploration"
        },
        {
            icon: Users,
            title: "Community Engagement",
            description: "Live voting system for audience participation"
        },
        {
            icon: Heart,
            title: "Valentine's Special",
            description: "Themed interface celebrating global romance"
        },
        {
            icon: Rabbit,
            title: "Real-Time Updates",
            description: "Dynamic visualization of voting patterns"
        }
    ];

    const FeatureCard = ({ icon: Icon, title, description }) => (
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-pink-200/20 hover:border-pink-200/40 transition-all">
            <div className="flex items-start gap-3">
                <Icon className="w-6 h-6 text-pink-300 flex-shrink-0" />
                <div>
                    <h3 className="text-base font-bold text-white mb-1">{title}</h3>
                    <p className="text-pink-100/80 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div
            ref={containerRef}
            className="w-full h-[600px] overflow-y-auto rounded-b-lg font-sans bg-gradient-to-br from-[#2D1A39] via-[#1F1A39] to-[#1A1A2E]"
            style={{
                width: dimensions.width,
                height: dimensions.height
            }}
        >
            {!showGlobe ? (
                <div className="p-8 h-full flex flex-col">
                    <div className="max-w-4xl mx-auto space-y-8 flex-grow ">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
                                Valentine's Day Interactive Globe
                            </h1>
                            <p className="text-pink-100 text-lg max-w-2xl mx-auto">
                                An immersive digital experience uniting the audience in a celebration
                                of love and beauty across geographies.
                            </p>
                            <button
                                onClick={handleShowGlobe}
                                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
                                 text-white rounded-lg font-semibold 
                                 hover:from-pink-600 hover:to-purple-600 
                                 transform transition-all hover:scale-105
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                            >
                                Launch Experience
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>

                        <div className="text-center space-y-3 ">
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
                                Built With
                            </h2>
                            <div className="flex justify-center gap-4">
                                {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/10 rounded-lg text-pink-200 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-pink-200/60 text-sm">
                            Built with{' '}
                            <a
                                href="https://github.com/VartanArtyunyan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-300 hover:text-pink-200 transition-colors underline decoration-dotted"
                            >
                                Vartan Yildiz
                            </a>
                            {' • '}
                            <a
                                href="https://youtu.be/EefRJuO81BI?t=281"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-300 hover:text-pink-200 transition-colors underline decoration-dotted"
                            >
                                Watch Launch
                            </a>
                        </p>
                    </div>
                </div>
            ) : (      // Globe View
                <div className="w-full h-full relative">
                    <GlobeRender />

                    <button
                        onClick={() => setShowGlobe(false)}
                        className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm 
                                 text-white rounded-lg border border-pink-200/20 
                                 hover:border-pink-200/40 transition-all
                                 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                    >
                        ← Back
                    </button>

                    <div className="absolute bottom-4 left-4 right-4 z-10 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-pink-200/20">
                        <p className="text-pink-100 text-sm text-center">
                            Click and drag to rotate the globe. Hover over countries to see vote counts.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteractiveGlobe;
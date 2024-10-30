import React from 'react'
const InteractiveGlobe = () => {
    const techStack = ["MongoDB", "React", "Express", "Node"]
    
    return (
        <div className="p-5 max-w-[600px] max-h-[400px] flex flex-col overflow-x-scroll justify-center items-center shadow-lg font-sans rounded-b-lg bg-gradient-to-b from-[#FDFDFA] to-[#FFC0CB] mx-auto font-libre-baskerville">
            <div className="text-center font-pacifico text-[#D32F2F]">
                <h1>Interactive Globe</h1>
            </div>

            <div className="flex flex-col text-[#4E342E] mx-5 -mt-2.5">
                <div className="text-base">
                    <p>For the annual Valentine's Day assembly, me and my friends developed an interactive and immersive digital experience that united the audience in a celebration of love and beauty across geographies. The project featured a real-time 3D globe projected on stage, allowing the audience to vote on countries they found most romantic, beautiful, or intriguing via a user-friendly website. As votes poured in, the globe dynamically updated, visually representing collective perceptions and sentiments. This project offered a unique and engaging way to involve the community in a celebration of love and diversity on Valentine's Day.</p>
                </div>

                <div className="text-base">
                    <h3 className="font-pacifico text-[#D32F2F]">Tech Stack</h3>
                    <ul className="list-none flex gap-2.5">
                        {techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InteractiveGlobe
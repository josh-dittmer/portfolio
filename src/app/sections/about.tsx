import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
    return (
        <div className="pt-14 min-h-screen bg-white">
            <div className="flex justify-center items-center">
                <div className="p-10">
                    <h1 className="text-3xl text-gray-900">About Me</h1>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 grid-flow-col">
                <div className="p-10">
                    <div className="pb-5 flex justify-center">
                        <Image src="/img/test_image.webp" width={250} height={250} alt="Scroll for more!" />
                    </div>
                    <div className="flex justify-center">
                        <p className="p-3 text-md max-w-md text-gray-500 leading-relaxed">My passion for technology began as a kid, taking apart old VCRs and other household electronics to see what makes them tick. As the years went by, my curiosity grew into years of committment to learning and utilizing various disciplines, including web development with JavaScript, React, and Next.js, embedded development with C++, and network programming. I love learning about new technologies and finding creative ways to use them. When I'm not at the computer, you can find me hiking, reading, or playing the guitar.</p>
                    </div>
                </div>
                <div className="p-10">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-xl text-gray-900">A brief history...</h2>
                    </div>
                    <motion.div 
                        className="flex justify-center z-10 overflow-hidden"
                        initial={{ height: 'auto', opacity: 0 }}
                        whileInView={{ height: 'auto', opacity: 1 }}
                        viewport={{ once: true, margin: '-30%' }}
                        transition={{ duration: 2 }}
                        
                    >
                        <ol className="relative border-s border-gray-700 max-w-md">                  
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500">2003</time>
                                <h3 className="text-lg font-semibold text-gray-900">The beginning</h3>
                                <ul className="text-gray-400">
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Born in San Jose, California</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500">2009 - 2018</time>
                                <h3 className="text-lg font-semibold text-gray-900">Growing up</h3>
                                <ul className="text-gray-400">
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Spent childhood biking around the neighborhood and playing video games with friends</span>
                                    </li>
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Earliest programming experience was following YouTube tutorials to make mods for Minecraft</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500">2018 - 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900">High school</h3>
                                <ul className="text-gray-400">
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Attended Leigh High School in San Jose, California</span>
                                    </li>
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Played trumpet in the upper level Jazz ensemble for 3 years</span>
                                    </li>
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Got first part-time job at Best Buy</span>
                                    </li>
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal">Graduated with honors</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500">2022 - present</time>
                                <h3 className="text-lg font-semibold text-gray-900">Starting college</h3>
                                <ul className="list-disc list-inside text-gray-400">
                                    <li className="pt-2">
                                        <span className="mb-4 text-base font-normal"></span>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}